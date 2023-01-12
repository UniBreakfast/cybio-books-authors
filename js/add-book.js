export { addBook };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genId } from './gen-id.js';

function addBook(book, authorIds) {
  const newBook = {id: genId(),...book};
  const bookAuthors = authors.filter(author => authorIds.includes(author.id));

  for (const author of bookAuthors) {
    author.books.push(newBook.id);
  }
  
  books.push(newBook);
}
