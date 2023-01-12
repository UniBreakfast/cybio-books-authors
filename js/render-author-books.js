export { renderAuthorBooks };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { authorBooksTBody, authorContent } from './elements.js';
import { goTo } from './router.js';

function renderAuthorBooks(id = +authorContent.dataset.id) {
  const author = authors.find(author => author.id == id);

  if (!author) {
    if (goTo.current == 'author') goTo('authors');
    return;
  }
  const authorBooks = books.filter(book => author.books.includes(book.id))

  authorBooksTBody.innerHTML = authorBooks.map(buildRow).join('');
}

function buildRow(book) {
  const genreNames = genres.filter(genre => book.genres.includes(genre.id)).map(genre => genre.name);

  return `
    <tr data-id="${book.id}">
      <td>${book.title}</td>
      <td>${book.pages}</td>
      <td>${genreNames.join(', ')}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `;
}
