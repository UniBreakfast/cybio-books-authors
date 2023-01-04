export { assignListeners };

import { addAuthorBtn, addAuthorModal, addAuthorForm, cancelButtons, modals } from './elements.js';
import { addAuthor } from './add-author.js';
import { renderAuthors } from './render-authors.js';

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

  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });
}
