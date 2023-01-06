export { renderAuthorBooks };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';

function renderAuthorBooks(id) {
  const author = authors.find(author => author.id == id);
  return books.filter(book => author.books.includes(book.id)).map(book => {
    const genreNames = genres.filter(genre => book.genres.includes(genre.id)).map(genre => genre.name);

    return `
      <tr data-id="${book.id}">
        <td>${book.title}</td>
        <td>${book.pages}</td>
        <td>${genreNames.join(', ')}</td>
        <td>
          <button class="edit-book-btn">Edit</button>
          <button class="delete-book-btn">Delete</button>
          <button class="view-book-btn">View</button>
        </td>
      </tr>
    `
  }).join('');
}
