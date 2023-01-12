import { addAuthorForm, addBookModal } from "./js/elements.js";
import { prepAddBookForm } from "./js/prep-add-book-form.js";
import { goTo } from "./js/router.js";


// goTo('author', 1);
fillForms();
prepAddBookForm();
// addBookModal.showModal();

function fillForms() {
  addAuthorForm.firstname.value = 'John';
  addAuthorForm.lastname.value = 'Doe';
  addAuthorForm.middlename.value = 'Rob';
  addAuthorForm.dob.value = '1990-01-01';
}
