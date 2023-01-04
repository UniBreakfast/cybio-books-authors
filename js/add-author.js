export { addAuthor }

import { authors } from '../data/authors.js';

function addAuthor(author) {
  author.books = [];
  authors.push(author);
}
