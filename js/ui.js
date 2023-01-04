export { prepUI };

import { assignListeners } from './listeners.js';
import { renderAuthors } from './render-authors.js';

function prepUI() {
  assignListeners();
  renderAuthors();
}
