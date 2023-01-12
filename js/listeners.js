export { assignListeners };

import {
  addAuthorBtn,
  authorsTBody,
  addAuthorModal,
  addAuthorForm,
  authorBooksTBody,
  addBookBtn,
  booksTBody,
  addBookModal,
  selectedAuthors,
  selectedGenres,
  authorSelect,
  genreSelect,
  selectAuthorBtn,
  selectGenreBtn,
  bookAuthorsTBody,
  cancelButtons,
  modals,
  addBookForm,
} from './elements.js';

import { addAuthor } from './add-author.js';
import { removeAuthor } from './remove-author.js';
import { renderAuthors } from './render-authors.js';
import { renderBooks } from './render-books.js';
import { renderAuthorBooks } from './render-author-books.js';
import { renderBookAuthors } from './render-book-authors.js';
import { goTo } from './router.js';
import { prepAddBookForm } from './prep-add-book-form.js';
import { selectAuthor, selectGenre, unselectAuthor, unselectGenre } from './select-book-form.js';
import { addBook } from './add-book.js';
import { removeBook } from './remove-book.js';

function assignListeners() {
  addAuthorForm.onsubmit = () => {
    addAuthor(Object.fromEntries(new FormData(addAuthorForm)));
    renderAuthors();
    addAuthorModal.close();
  };

  addBookForm.onsubmit = () => {
    const book = Object.fromEntries(new FormData(addBookForm));
    const authorIds = [...selectedAuthors.children].map(author => +author.dataset.id);

    book.genres = [...selectedGenres.children].map(genre => +genre.dataset.id);
    addBook(book, authorIds);

    renderAuthors();
    renderBooks();
    // renderAuthorBooks();

    addBookModal.close();
  };

  addAuthorBtn.onclick = () => addAuthorModal.showModal();

  addBookBtn.onclick = () => {
    prepAddBookForm();
    addBookModal.showModal();
  };

  cancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('dialog');
      modal.close();
    });
  });

  authorsTBody.onclick = bookAuthorsTBody.onclick = e => {
    if (e.target.matches('.del-btn')) {
      removeAuthor(+e.target.closest('tr').dataset.id);
      renderAuthors();
      renderBooks();
    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const authorId = +e.target.closest('tr').dataset.id;
      goTo('author', authorId)
    }
  };

  booksTBody.onclick = authorBooksTBody.onclick = e => {
    if (e.target.matches('.del-btn')) {
      removeBook(+e.target.closest('tr').dataset.id);
      renderAuthors();
      renderBooks();
    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const bookId = e.target.closest('tr').dataset.id;
      goTo('book', bookId)
    }
  };

  modals.forEach((modal) => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.close();
      }
    });
  });

  selectedAuthors.onclick = e => {
    if (e.target.matches('.remove-author-btn')) {
      unselectAuthor(+e.target.closest('li').dataset.id);
    }
  };

  selectedGenres.onclick = e => {
    if (e.target.matches('.remove-genre-btn')) {
      unselectGenre(+e.target.closest('li').dataset.id);
    }
  };

  selectAuthorBtn.onclick = () => selectAuthor(+authorSelect.value);
  selectGenreBtn.onclick = () => selectGenre(+genreSelect.value);
}
