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
  `

  renderAuthorBooks(id);
}

function renderBook(id) {
  const book = books.find(book => book.id == id);
  const bookAuthors = authors.filter(author => author.books.includes(+id));
  const bookGenres = genres.filter(genre => book.genres.includes(genre.id)).map(genre => genre.name);

  bookContent.innerHTML = `
    <h1>${book.title} (${bookGenres.join(', ')})</h1>
    <h2>${bookAuthors.map(formatShort).join(', ')}</h2>
  `

  renderBookAuthors(id);
}

function format(author) {
  return `${author.firstname} ${author.middlename} ${author.lastname}`;
}

function formatShort(author) {
  return `${author.firstname} ${author.lastname}`;
}
