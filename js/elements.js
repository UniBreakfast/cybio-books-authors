const screens = getById('screens');
const searchForm = getById('search-form');
const addAuthorBtn = getById('add-author-btn');
const authorsTBody = getById('authors-tbody');
const [authorContent] = getAllBy('#author-scr>.content');
const addAuthorModal = getById('add-author-modal');
const addAuthorForm = getById('add-author-form');
const addAuthorBookBtn = getByClass('add-book-btn');
const authorBooksTBody = getById('author-books-tbody');
const delAuthorBtn = getById('delete-author-btn');

const genresTBody = getById('genres-tbody');
const addBookBtn = getById('add-book-btn');
const booksTBody = getById('books-tbody');
const [bookContent] = getAllBy('#book-scr>.content');
const addBookModal = getById('add-book-modal');
const addBookForm = getById('add-book-form');
const addBookAuthorBtn = getByClass('add-author-btn');
const bookAuthorsTBody = getById('book-authors-tbody');
const delBookBtn = getById('delete-book-btn');
const selectedAuthors = getByClass('selected-authors');
const selectedGenres = getByClass('selected-genres');
const [authorSelect, genreSelect] = [...getAllBy('select', addBookForm)];
const selectAuthorBtn = getByClass('add-author-btn', addBookForm);
const selectGenreBtn = getByClass('add-genre-btn', addBookForm);

const screenRadios = getAllBy('[name="screen"]');
const modals = getAllBy('dialog');
const cancelButtons = getAllBy('.cancel-btn');
const screenDict = Object.fromEntries([...screenRadios].map(radio => [radio.id.split('-')[0], radio]));

export {
  screens,
  searchForm,
  addAuthorBtn,
  authorsTBody,
  authorContent,
  addAuthorModal,
  addAuthorForm,
  authorBooksTBody,
  addAuthorBookBtn,
  delAuthorBtn,

  genresTBody,
  addBookBtn,
  booksTBody,
  bookContent,
  addBookModal,
  addBookForm,
  addBookAuthorBtn,
  bookAuthorsTBody,
  delBookBtn,
  selectedAuthors,
  selectedGenres,
  authorSelect,
  genreSelect,
  selectAuthorBtn,
  selectGenreBtn,

  screenRadios,
  modals,
  cancelButtons,
  screenDict,
}

function getById(id) {
  return document.getElementById(id);
}

function getByClass(className, parent) {
  return (parent || document).querySelector('.'+className);
}

function getAllBy(selector, parent) {
  return (parent || document).querySelectorAll(selector);
}
