export { assignListeners };

import {
  addAuthorBtn,
  authorsTBody,
  addAuthorModal,
  addAuthorForm,
  authorContent,
  authorBooksTBody,
  delAuthorBtn,
  addBookBtn,
  booksTBody,
  addBookModal,
  addBookForm,
  bookContent,
  bookAuthorsTBody,
  delBookBtn,
  selectedAuthors,
  selectedGenres,
  authorSelect,
  genreSelect,
  selectAuthorBtn,
  selectGenreBtn,
  cancelButtons,
  modals,
} from './elements.js';

import { addAuthor } from './add-author.js';
import { removeAuthor } from './remove-author.js';
import { rerenderData } from './rerender-data.js';
import { goTo } from './router.js';
import { prepAddBookForm } from './prep-add-book-form.js';
import { selectAuthor, selectGenre, unselectAuthor, unselectGenre } from './select-book-form.js';
import { addBook } from './add-book.js';
import { removeBook } from './remove-book.js';

function assignListeners() {
  addAuthorForm.onsubmit = () => {
    addAuthor(Object.fromEntries(new FormData(addAuthorForm)));
    rerenderData();
    addAuthorModal.close();
  };

  addBookForm.onsubmit = () => {
    const book = Object.fromEntries(new FormData(addBookForm));
    const authorIds = [...selectedAuthors.children].map(author => +author.dataset.id);

    book.genres = [...selectedGenres.children].map(genre => +genre.dataset.id);
    addBook(book, authorIds);
    rerenderData();
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
      rerenderData();
    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const authorId = +e.target.closest('tr').dataset.id;
      goTo('author', authorId)
    }
  };

  delAuthorBtn.onclick = () => {
    removeAuthor(+authorContent.dataset.id);
    rerenderData();
  };

  booksTBody.onclick = authorBooksTBody.onclick = e => {
    if (e.target.matches('.del-btn')) {
      removeBook(+e.target.closest('tr').dataset.id);
      rerenderData();
    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const bookId = +e.target.closest('tr').dataset.id;
      goTo('book', bookId)
    }
  };

  delBookBtn.onclick = () => {
    removeBook(+bookContent.dataset.id);
    rerenderData();
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
