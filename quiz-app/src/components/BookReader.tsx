import React from 'react';
import { Box } from '@chakra-ui/react';
import { ReactReader } from 'react-reader';

export default function BookReader({ selectedBook }) {
  return (
    <Box style={{ height: '100vh' }}>
      <ReactReader
        url={selectedBook.url}
        location={0}
        locationChanged={(epubcifi) => {}}
      />
    </Box>
  );
}
