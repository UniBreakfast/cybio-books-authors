export { prepData };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { genId } from './gen-id.js';

function prepData() {
  for (const author of authors) {
    author.id = genId();
  }

  for (const book of books) {
    book.id = genId();
  }

  for (const genre of genres) {
    genre.id = genId();
  }
}
