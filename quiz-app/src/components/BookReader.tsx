import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { ReactReader } from 'react-reader';
import { Rendition, Contents } from 'epubjs';
import { textVide } from 'text-vide';

function applyBionicMode(contents: Contents) {
  const document = contents.document;
  const body = document.querySelector('body');
  if (body) {
    const modifiedText = textVide(body.innerHTML);
    body.innerHTML = modifiedText;
  }
}

export default function BookReader({
  selectedBook,
  onHighlightsChange,
  bionicMode,
  comicNeueActive,
}) {
  const [location, setLocation] = useState<string | number>(0);
  const highlightKey = `highlightedText_${selectedBook.title}`;
  const [highlightedText, setHighlightedText] = useState<string | null>(
    localStorage.getItem(highlightKey)
  );
  const [sentences, setSentences] = useState<string[]>([]);
  const [rendition, setRendition] = useState<Rendition | undefined>(undefined);
  const highlightedTextRef = useRef<string | null>(null);

  const apiUrl = '/api/compareSentences';

  useEffect(() => {
    if (bionicMode && rendition) {
      rendition.hooks.content.register(applyBionicMode);
      const currentLocation = rendition.location.start.cfi;
      rendition.display().then(() => {
        rendition.display(currentLocation);
      });
    }
  }, [bionicMode, rendition]);

  useEffect(() => {
    if (rendition) {
      if (comicNeueActive) {
        rendition.themes.default({
          body: {
            'font-family': 'Comic Neue',
          },
        });
      } else {
        rendition.themes.default({
          body: {
            'font-family': 'Inter, sans-serif',
          },
        });
      }
    }
  }, [comicNeueActive, rendition]);

  useEffect(() => {
    if (highlightedText && highlightedText !== highlightedTextRef.current) {
      const splitSentences = highlightedText.split('. ');
      setSentences(splitSentences);
      onHighlightsChange(splitSentences);
    }
    highlightedTextRef.current = highlightedText;
  }, [highlightedText, onHighlightsChange]);

  //send sentences to backend
  useEffect(() => {
    if (sentences.length > 0) {
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentences }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
        })
        .then((data) => {
          console.log('data:', data);
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    }
  }, [sentences, apiUrl]);

  // highlighting text
  useEffect(() => {
    if (rendition) {
      function setRenderSelection(cfiRange: string, contents: Contents) {
        if (rendition) {
          const newText = rendition.getRange(cfiRange).toString();
          setHighlightedText((prevText) => {
            const newTextValue = prevText ? `${prevText}. ${newText}` : newText;
            localStorage.setItem('highlightedText', newTextValue);
            localStorage.setItem(highlightKey, newTextValue);
            return newTextValue;
          });
          rendition.annotations.add(
            'highlight',
            cfiRange,
            {},
            undefined,
            'hl',
            { fill: 'red', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
          );
          const selection = contents.window.getSelection();
          selection?.removeAllRanges();
        }
      }
      rendition.on('selected', setRenderSelection);
      return () => {
        rendition?.off('selected', setRenderSelection);
      };
    }
  }, [sentences, rendition, highlightKey]);

  const locationChanged = (epubcifi: string) => {
    setLocation(epubcifi);
  };
  return (
    <Box style={{ height: '75vh' }}>
      <ReactReader
        url={selectedBook.url}
        location={location}
        locationChanged={locationChanged}
        getRendition={(_rendition: Rendition) => {
          setRendition(_rendition);
        }}
      />
    </Box>
  );
}
