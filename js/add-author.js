export { addAuthor }

import { authors } from '../data/authors.js';
import { genId } from './gen-id.js';

function addAuthor(author) {
  author.books = [];
  author.id = genId();
  authors.push(author);
}
