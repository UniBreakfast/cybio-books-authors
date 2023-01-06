export { renderBooks };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { booksTBody } from './elements.js';
import { formatName } from './render-authors.js';

function renderBooks() {
  booksTBody.innerHTML = books.map(buildRow).join('');
}

function buildRow(book) {
  const authorNames = authors.filter(author => author.books.includes(book.id)).map(formatName);

  return `
    <tr data-id="${book.id}">
      <td>${book.title}</td>
      <td>${authorNames.join(', ')}</td>
      <td>${book.pages}</td>
      <td>${book.genre}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `;
}
