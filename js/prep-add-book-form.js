export { prepAddBookForm, buildAuthorOption, buildGenreOption };

import { authorSelect, genreSelect, selectedAuthors, selectedGenres } from "./elements.js";
import { authors } from "../data/authors.js";
import { genres } from "../data/genres.js";
import { formatShortName } from "./format.js";

function prepAddBookForm() {
  selectedAuthors.innerHTML = "";
  selectedGenres.innerHTML = "";
  authorSelect.innerHTML = authors.map(buildAuthorOption).join("");
  genreSelect.innerHTML = genres.map(buildGenreOption).join("");
}

function buildAuthorOption(author) {
  return `<option value="${author.id}">${formatShortName(author)}</option>`;
}

function buildGenreOption(genre) {
  return `<option value="${genre.id}">${genre.name}</option>`;
}
