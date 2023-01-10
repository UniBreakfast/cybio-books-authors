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
} from './elements.js';

import { addAuthor } from './add-author.js';
import { renderAuthors } from './render-authors.js';
import { goTo } from './router.js';
import { prepAddBookForm } from './prep-add-book-form.js';
import { selectAuthor, selectGenre, unselectAuthor, unselectGenre } from './select-book-form.js';

function assignListeners() {
  addAuthorForm.addEventListener('submit', () => {
    addAuthor(Object.fromEntries(new FormData(addAuthorForm)));
    renderAuthors();
    addAuthorModal.close();
  });

  addAuthorBtn.addEventListener('click', () => addAuthorModal.showModal());

  addBookBtn.addEventListener('click', () => {
    prepAddBookForm();
    addBookModal.showModal();
  });

  cancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('dialog');
      modal.close();
    });
  });

  authorsTBody.onclick = bookAuthorsTBody.onclick = e => {
    if (e.target.matches('.del-btn')) {

    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const authorId = e.target.closest('tr').dataset.id;
      goTo('author', authorId)
    }
  };

  booksTBody.onclick = authorBooksTBody.onclick = e => {
    if (e.target.matches('.del-btn')) {

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
      unselectAuthor(e.target.closest('li').dataset.id);
    }
  };

  selectedGenres.onclick = e => {
    if (e.target.matches('.remove-genre-btn')) {
      unselectGenre(e.target.closest('li').dataset.id);
    }
  };

  selectAuthorBtn.addEventListener('click', () => selectAuthor(authorSelect.value));
  selectGenreBtn.addEventListener('click', () => selectGenre(genreSelect.value));
}
