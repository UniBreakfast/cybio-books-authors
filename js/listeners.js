export { assignListeners };

import {
  addAuthorBtn,
  authorsTBody,
  addAuthorModal,
  addAuthorForm,
  cancelButtons,
  modals,
  booksTBody
} from './elements.js';
import { addAuthor } from './add-author.js';
import { renderAuthors } from './render-authors.js';
import { goTo } from './router.js';

function assignListeners() {
  addAuthorForm.addEventListener('submit', () => {
    addAuthor(Object.fromEntries(new FormData(addAuthorForm)));
    renderAuthors();
    addAuthorModal.close();
  });

  addAuthorBtn.addEventListener('click', () => addAuthorModal.showModal());

  cancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('dialog');
      modal.close();
    });
  });

  authorsTBody.addEventListener('click', e => {
    if (e.target.matches('.del-btn')) {

    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const authorId = e.target.closest('tr').dataset.id;
      goTo('author', authorId)
    }
  });

  booksTBody.addEventListener('click', e => {
    if (e.target.matches('.del-btn')) {

    }
    else if (e.target.matches('.edit-btn')) {

    }
    else if (e.target.matches('.view-btn')) {
      const bookId = e.target.closest('tr').dataset.id;
      goTo('book', bookId)
    }
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.close();
      }
    });
  });
}
