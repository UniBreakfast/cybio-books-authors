export const renderDict = {
  author: renderAuthor,
  book: renderBook,
};

import { authors } from '../data/authors.js';
import { authorContent } from './elements.js';
import { renderAuthorBooks } from './render-author-books.js';

function renderAuthor(id) {
  const author = authors.find(author => author.id == id);
  authorContent.innerHTML = `
    <h1>${format(author)}</h1>
    <h3>${author.dob}</h3>

    <table>
      <thead>
        <tr>
          <th>Books</th>
          <th>Number of pages</th>
          <th>Genres</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="author-books-tbody">${renderAuthorBooks(id)}</tbody>
    </table>

    <button class="edit-author-btn">Edit Author</button>
    <button class="delete-author-btn">Delete Author</button>
  `
}

function renderBook(id) {
  // ...
}

// Joan Kathleen Rowling
function format(author) {
  return `${author.firstname} ${author.middlename} ${author.lastname}`;
}
