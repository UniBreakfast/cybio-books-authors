export { selectAuthor, selectGenre, unselectAuthor, unselectGenre };

import { authors } from '../data/authors.js';
import { genres } from '../data/genres.js';
import { selectedAuthors, selectedGenres, authorSelect, genreSelect } from './elements.js';
import { formatFullName } from './format.js';
import { buildAuthorOption, buildGenreOption } from './prep-add-book-form.js';


function selectAuthor(id) {
  const author = authors.find(author => author.id == id);

  selectedAuthors.innerHTML += `
    <li data-id="${id}">
      <span>${formatFullName(author)}</span>
      <button type="button" class="remove-author-btn">&times;</button>
    </li>
  `;

  authorSelect.querySelector(`[value="${id}"]`)?.remove();
}

function selectGenre(id) {
  const genre = genres.find(genre => genre.id == id);

  selectedGenres.innerHTML += `
    <li data-id="${id}">
      <span>${genre.name}</span>
      <button type="button" class="remove-genre-btn">&times;</button>
    </li>
  `;

  genreSelect.querySelector(`[value="${id}"]`)?.remove();
}

function unselectAuthor(id) {
  selectedAuthors.querySelector(`[data-id="${id}"]`)?.remove();
  
  const author = authors.find(author => author.id == id);
  
  authorSelect.innerHTML += buildAuthorOption(author);
}

function unselectGenre(id) {
  selectedGenres.querySelector(`[data-id="${id}"]`)?.remove();

  const genre = genres.find(genre => genre.id == id);

  genreSelect.innerHTML += buildGenreOption(genre);
}
