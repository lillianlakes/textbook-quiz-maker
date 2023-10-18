import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: { bg: '#F8F3EF' },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: '21px',
        borderRadius: '16px',
        fontWeight: '700',
      },
    },
  },
});

export default theme;
