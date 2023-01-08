export const screens = document.getElementById('screens');
export const addAuthorBtn = document.getElementById('add-author-btn');
export const authorsTBody = document.getElementById('authors-tbody');
export const authorContent = document.querySelector('#author-scr>.content');
export const authorBooksTBody = document.getElementById('author-books-tbody');
export const genresTBody = document.getElementById('genres-tbody');
export const booksTBody = document.getElementById('books-tbody');
export const bookContent = document.querySelector('#book-scr>.content');
export const bookAuthorsTBody = document.getElementById('book-authors-tbody');
export const screenRadios = document.querySelectorAll('[name="screen"]');
export const modals = document.querySelectorAll('dialog');
export const addAuthorModal = document.getElementById('add-author-modal');
export const addAuthorForm = document.getElementById('add-author-form');
export const cancelButtons = document.querySelectorAll('.cancel-btn');

export const screenDict = Object.fromEntries([...screenRadios].map(radio => [radio.id.split('-')[0], radio]));
