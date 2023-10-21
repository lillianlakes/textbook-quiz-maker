import React from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

export default function Footer({ openQuiz }) {
  const handleQuizClick = () => {
    openQuiz();
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
          <MenuItem fontFamily="sans-serif" bg="#FFD465">
            Sans Serif
          </MenuItem>
          <MenuItem fontFamily="revert" bg="#FFD465">
            Bionic Read
          </MenuItem>
        </MenuList>
        <ButtonGroup>
          <Button size="md">Highlights</Button>
          <Button size="md" onClick={handleQuizClick}>
            Quiz
          </Button>
        </ButtonGroup>
      </Menu>
    </Flex>
  );
}
