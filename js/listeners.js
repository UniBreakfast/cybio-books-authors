export { assignListeners };

import { addAuthorBtn, addAuthorModal, cancelButtons } from './elements.js';

function assignListeners() {
  addAuthorBtn.addEventListener('click', () => addAuthorModal.showModal());

  cancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('dialog');
      modal.close();
    });
  });
}
