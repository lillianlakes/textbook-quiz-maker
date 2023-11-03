import React from 'react';
import {
  Flex,
  Box,
  Stack,
  Text,
  Textarea,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

export default function Quiz() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      mt="50px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid blue"
        borderRadius={12}
        p={{ base: 4, md: 10 }}
        w={{ base: '90%', md: 'auto' }}
        bg="#D2B6FF"
      >
        <Box w="450px">
          <Stack gap={8}>
            <Text fontSize={{ base: 'sm', md: 'md' }} as="b">
              Why was William Henry Channing invited to prepare the call and
              resolutions for the Woman's Rights Convention in Rochester in
              1853, and what was the purpose of the call and resolutions?
            </Text>
            <Textarea
              size="md"
              placeholder="Type your answer here"
              bg="white"
              wordBreak="break-word"
            ></Textarea>

            <ButtonGroup justifyContent="space-between">
              <Button>Previous</Button>
              <Button>Next</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
