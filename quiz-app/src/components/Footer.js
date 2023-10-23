import React, { useState } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

export default function Footer({
  openQuiz,
  openHighlights,
  setBionicMode,
  setComicNeueActive,
}) {
  const handleQuizClick = () => {
    openQuiz();
  };
  const handleHighlightsClick = () => {
    openHighlights();
  };

  const handleBionicToggle = () => {
    setBionicMode((prevMode) => !prevMode);
  };

  const handleFontToggle = () => {
    setComicNeueActive((prevMode) => !prevMode);
  };

  return (
    <Flex direction="row" my={3} justify="space-between">
      <Menu>
        <MenuButton
          size="md"
          p={2}
          border="1px solid black"
          _active={{
            bg: '#FFD465',
            transform: 'scale(0.98)',
          }}
        >
          Aa
        </MenuButton>
        <MenuList minW="none" bg="#FFD465">
          <MenuItem fontFamily="cosmic" bg="#FFD465" onClick={handleFontToggle}>
            Comic Neue
          </MenuItem>
          <MenuItem
            fontFamily="revert"
            bg="#FFD465"
            onClick={handleBionicToggle}
          >
            Bionic Read
          </MenuItem>
        </MenuList>
        <ButtonGroup>
          <Button size="md" onClick={handleHighlightsClick}>
            Highlights
          </Button>
          <Button size="md" onClick={handleQuizClick}>
            Quiz
          </Button>
        </ButtonGroup>
      </Menu>
    </Flex>
  );
}
