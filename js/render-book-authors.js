export { renderBookAuthors };

import { authors } from '../data/authors.js';
import { formatName } from './render-authors.js';

function renderBookAuthors(id) {
  const bookAuthors = authors.filter(author => author.books.includes(+id));

  return bookAuthors.map(author => `
    <tr data-id="${author.id}">
      <td>${formatName(author)}</td>
      <td>${author.books.length}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `).join('');
  
}
