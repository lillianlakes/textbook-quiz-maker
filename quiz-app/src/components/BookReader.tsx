import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ReactReader } from 'react-reader';

export default function BookReader({ selectedBook }) {
  const [location, setLocation] = useState<string | number>(0);
  return (
    <Box style={{ height: '70vh' }}>
      <ReactReader
        url={selectedBook.url}
        location={location}
        locationChanged={(epubcifi) => setLocation(epubcifi)}
      />
    </Box>
  );
}
