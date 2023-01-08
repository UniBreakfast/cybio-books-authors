export const renderDict = {
  author: renderAuthor,
  book: renderBook,
};

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { authorContent, bookContent } from './elements.js';
import { renderAuthorBooks } from './render-author-books.js';
import { renderBookAuthors } from './render-book-authors.js';

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
  `
}

function renderBook(id) {
  const book = books.find(book => book.id == id);
  const bookAuthors = authors.filter(author => author.books.includes(+id));
  const bookGenres = genres.filter(genre => book.genres.includes(genre.id)).map(genre => genre.name);

  bookContent.innerHTML = `
    <h1>${book.title} (${bookGenres.join(', ')})</h1>
    <h2>${bookAuthors.map(formatShort).join(', ')}</h2>

    <table>
      <thead>
        <tr>
          <th>Authors</th>
          <th>Number of books</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="book-authors-tbody">${renderBookAuthors(id)}</tbody>
    </table>
  `
}

function format(author) {
  return `${author.firstname} ${author.middlename} ${author.lastname}`;
}

function formatShort(author) {
  return `${author.firstname} ${author.lastname}`;
}
