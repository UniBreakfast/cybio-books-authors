export { renderAuthors };

import { authors } from '../data/authors.js';
import { authorsTBody } from './elements.js';

function renderAuthors() {
  authorsTBody.innerHTML = authors.map(buildRow).join('');
}

function buildRow(author) {
  return `
    <tr>
      <td>${formatName(author)}</td>
      <td>${author.books.length}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `;
}

function formatName(author) {
  return `${author.lastname} ${author.firstname[0]}. ${author.middlename[0]}.`;
}
