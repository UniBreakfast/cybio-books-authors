export { renderFound };

import { books } from '../data/books.js';
import { authors } from '../data/authors.js';
import { renderBooks } from './render-books.js';
import { renderAuthors } from './render-authors.js';

function renderFound(type, items) {
  const list = type == 'book' ? books : authors;
  const renderer = type == 'book' ? renderBooks : renderAuthors;
  const allItems = list.splice(0, list.length, ...items);

  renderer();

  list.splice(0, list.length, ...allItems);
}
