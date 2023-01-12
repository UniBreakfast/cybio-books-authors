const screens = document.getElementById('screens');
const searchForm = document.getElementById('search-form');
const addAuthorBtn = document.getElementById('add-author-btn');
const authorsTBody = document.getElementById('authors-tbody');
const authorContent = document.querySelector('#author-scr>.content');
const addAuthorModal = document.getElementById('add-author-modal');
const addAuthorForm = document.getElementById('add-author-form');
const authorBooksTBody = document.getElementById('author-books-tbody');
const delAuthorBtn = document.getElementById('delete-author-btn');

const genresTBody = document.getElementById('genres-tbody');
const addBookBtn = document.getElementById('add-book-btn');
const booksTBody = document.getElementById('books-tbody');
const bookContent = document.querySelector('#book-scr>.content');
const addBookModal = document.getElementById('add-book-modal');
const addBookForm = document.getElementById('add-book-form');
const bookAuthorsTBody = document.getElementById('book-authors-tbody');
const delBookBtn = document.getElementById('delete-book-btn');
const selectedAuthors = document.querySelector('.selected-authors');
const selectedGenres = document.querySelector('.selected-genres');
const [authorSelect, genreSelect] = [...addBookForm.querySelectorAll('select')];
const selectAuthorBtn = addBookForm.querySelector('.add-author-btn');
const selectGenreBtn = addBookForm.querySelector('.add-genre-btn');

const screenRadios = document.querySelectorAll('[name="screen"]');
const modals = document.querySelectorAll('dialog');
const cancelButtons = document.querySelectorAll('.cancel-btn');
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
  delAuthorBtn,

  genresTBody,
  addBookBtn,
  booksTBody,
  bookContent,
  addBookModal,
  addBookForm,
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
