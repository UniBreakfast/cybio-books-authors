export { prepUI };

import { assignListeners } from './listeners.js';
import { renderAuthors } from './render-authors.js';
import { renderBooks } from './render-books.js';

function prepUI() {
  assignListeners();
  renderAuthors();
  renderBooks();
}
