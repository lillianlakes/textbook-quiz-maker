import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { ReactReader } from 'react-reader';
import { Rendition, Contents } from 'epubjs';

export default function BookReader({ selectedBook }) {
  const [location, setLocation] = useState<string | number>(0);
  const [highlightedText, setHighlightedText] = useState<string | null>(
    localStorage.getItem('highlightedText')
  );
  const [sentences, setSentences] = useState<string[]>([]);
  const [rendition, setRendition] = useState<Rendition | undefined>(undefined);

  const apiUrl = '/api/compareSentences';

  //split highlighted text into sentences
  useEffect(() => {
    if (highlightedText) {
      const splitSentences = highlightedText.split('. ');
      setSentences(splitSentences);
      console.log('Split sentences:', splitSentences);
    }
  }, [highlightedText]);

  //clear highlighted text in localStorage when a new book is mounted
  useEffect(() => {
    setSentences([]);
    localStorage.removeItem('highlightedText');
    setHighlightedText(null);
  }, [selectedBook]);

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
  }, [sentences, rendition]);

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
