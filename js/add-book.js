export { addBook };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { renderBooks } from './render-books.js';
import { genId } from './gen-id.js';
import { renderAuthors } from './render-authors.js';
import { renderAuthorBooks } from './render-author-books.js';
import { renderBookAuthors } from './render-book-authors.js';

function addBook(book, authorIds) {
  const newBook = {id: genId(books),...book};
  const bookAuthors = authors.filter(author => authorIds.includes(author.id));

  for (const author of bookAuthors) {
    author.books.push(newBook.id);
  }
  
  books.push(newBook);
}
