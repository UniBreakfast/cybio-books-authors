export { renderBookAuthors };

import { authors } from '../data/authors.js';
import { formatNameInitials } from './format.js';
import { bookAuthorsTBody } from './elements.js';

function renderBookAuthors(id) {
  const bookAuthors = authors.filter(author => author.books.includes(+id));

  bookAuthorsTBody.innerHTML = bookAuthors.map(buildRow).join('');
}

function buildRow(author) {
  return `
    <tr data-id="${author.id}">
      <td>${formatNameInitials(author)}</td>
      <td>${author.books.length}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `;
}
