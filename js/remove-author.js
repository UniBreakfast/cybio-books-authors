export { removeAuthor };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

function removeAuthor(id) {
  const author = authors.find(author => author.id == id);
  const authorIndex = authors.indexOf(author);

  author.books.forEach(bookId => {
    if (authors.filter(author => author.books.includes(bookId)).length > 1) return
    
    const bookIndex = books.findIndex(book => book.id == bookId);

    books.splice(bookIndex, 1);
  });

  authors.splice(authorIndex, 1);
}
  