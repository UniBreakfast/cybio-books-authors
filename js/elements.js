const screens = document.getElementById('screens');
const addAuthorBtn = document.getElementById('add-author-btn');
const authorsTBody = document.getElementById('authors-tbody');
const authorContent = document.querySelector('#author-scr>.content');
const addAuthorModal = document.getElementById('add-author-modal');
const addAuthorForm = document.getElementById('add-author-form');
const authorBooksTBody = document.getElementById('author-books-tbody');
const genresTBody = document.getElementById('genres-tbody');
const addBookBtn = document.getElementById('add-book-btn');
const booksTBody = document.getElementById('books-tbody');
const bookContent = document.querySelector('#book-scr>.content');
const addBookModal = document.getElementById('add-book-modal');
const addBookForm = document.getElementById('add-book-form');
const bookAuthorsTBody = document.getElementById('book-authors-tbody');
const screenRadios = document.querySelectorAll('[name="screen"]');
const modals = document.querySelectorAll('dialog');
const cancelButtons = document.querySelectorAll('.cancel-btn');
const screenDict = Object.fromEntries([...screenRadios].map(radio => [radio.id.split('-')[0], radio]));

export {
  screens,
  addAuthorBtn,
  authorsTBody,
  authorContent,
  addAuthorModal,
  addAuthorForm,
  authorBooksTBody,
  genresTBody,
  addBookBtn,
  booksTBody,
  bookContent,
  addBookModal,
  addBookForm,
  bookAuthorsTBody,
  screenRadios,
  modals,
  cancelButtons,

  screenDict,
}
