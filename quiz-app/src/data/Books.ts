export interface Book {
  id: number;
  title: string;
  author?: string;
  description?: string;
  url?: string;
  image_url?: string;
}

export interface Subject {
  subject: string;
  books: Book[];
}

export const subjects: Subject[] = [
  {
    subject: 'History',
    books: [
      {
        id: 1,
        title: 'A Black Women’s History Of The United States',
        author: 'Daina Ramey Berry, Kali Nicole Gross.',
        description:
          'A powerful and important book that charts the rich and dynamic history of Black women in the United States. It shows how these courageous women challenged racial and gender oppression and boldly asserted their authority and visions of freedom even in the face of resistance. This book is required reading for anyone interested in social justice.',
        url: 'https://github.com/lillianlakes/textbook-quiz-maker/raw/e7d3b884a598c295e482805b1c6ef9e897e7e8f7/quiz-app/src/data/BWH.epub',
        image_url:
          'https://books.google.com/books/publisher/content?id=aTHJDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U10cKc-3qW4c5DJJjp44RlQI7zA7A&w=1280',
      },
      {
        id: 2,
        title: 'History of Woman Suffrage',
        author: 'Susan B. Anthony',
        description: `Published in six volumes from 1881 to 1922, it is a history of the women's suffrage movement, primarily in the United States.`,
        url: '/HOWS.epub',
        image_url:
          'https://img.thriftbooks.com/api/images/i/m/C076C256016B14ABD1FE3C4E7AF9C41A041E04AD.jpg',
      },
      {
        id: 3,
        title: `Passenger On The Pearl`,
        author: 'Winifred Conkling',
        description:
          'The page-turning, heart-wrenching true story of one young woman willing to risk her safety and even her life for a chance at freedom in the largest slave escape attempt in American history.',
        url: '/POTP.epub',
        image_url:
          'https://books.google.com/books/publisher/content?id=o8-rAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1vejxHN1OyIXaHPebTfjiAGWfZIw&w=1280',
      },
      {
        id: 4,
        title: 'The American Journey To World War 1',
        author: 'Joyce Appleby',
        description:
          'The page-turning, heart-wrenching true story of one young woman willing to risk her safety and even her life for a chance at freedom in the largest slave escape attempt in American history.',
        url: '/POTP.epub',
        image_url:
          'https://secure.coverart.textbookrush.com/large/861/1-9780078693861.jpg',
      },
    ],
  },
  {
    subject: 'Science',
    books: [
      {
        id: 1,
        title: 'Biology (Grade 7)',
        image_url:
          'https://img.thriftbooks.com/api/images/l/0c4420533fe950f75681b98f5871ae480fb40bf5.jpg',
      },
      {
        id: 2,
        title: 'Chemistry, 11th Edition',
        image_url:
          'https://m.media-amazon.com/images/I/611X6uJkrzL._SL1000_.jpg',
      },
    ],
  },
  {
    subject: 'Math',
    books: [
      {
        id: 1,
        title: 'Precalculus With Limits: A Graphing Approach',
        image_url:
          'https://m.media-amazon.com/images/I/91hSEaNSugL._SL1500_.jpg',
      },
      {
        id: 2,
        title: `McGraw-Hill's Math (Grade 8)`,
        image_url:
          'https://cdn.kobo.com/book-images/eb35ebbc-2238-4a0a-8e6d-8ac02ee8106a/1200/1200/False/mcgraw-hill-s-math-grade-8.jpg',
      },
    ],
  },
];
