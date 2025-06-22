const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    alreadyRead: true
  }
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const bookInfo = `"${book.title}" by ${book.author}`;

  if (book.alreadyRead) {
    console.log(`You already read ${bookInfo}.`);
  } else {
    console.log(`You still need to read ${bookInfo}.`);
  }
}
