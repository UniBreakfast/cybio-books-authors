export { renderAuthorBooks };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

function renderAuthorBooks(id) {
  const author = authors.find(author => author.id == id);
  return books.filter(book => author.books.includes(book.id)).map(book => `
    <tr data-id="${book.id}">
      <td>${book.title}</td>
      <td>${book.pages}</td>
      <td>${book.genre}</td>
      <td>
        <button class="edit-book-btn">Edit</button>
        <button class="delete-book-btn">Delete</button>
        <button class="view-book-btn">View</button>
      </td>
    </tr>
  `).join('');
}
