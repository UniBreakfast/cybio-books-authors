export { rerenderData };

import { renderAuthors } from './render-authors.js';
import { renderBooks } from './render-books.js';
import { renderAuthorBooks } from './render-author-books.js';
import { renderBookAuthors } from './render-book-authors.js';

function rerenderData() {
  renderAuthors();
  renderBooks();
  renderAuthorBooks();
  renderBookAuthors();
}
