export { assignListeners };

import {
  searchForm,
  addAuthorBtn,
  authorsTBody,
  addAuthorModal,
  addAuthorForm,
  authorContent,
  authorBooksTBody,
  addAuthorBookBtn,
  delAuthorBtn,
  addBookBtn,
  booksTBody,
  addBookModal,
  addBookForm,
  bookContent,
  bookAuthorsTBody,
  addBookAuthorBtn,
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
import { search } from './search.js';
import { renderFound } from './render-found.js';
import { rerenderData } from './rerender-data.js';
import { goTo } from './router.js';
import { prepAddBookForm } from './prep-add-book-form.js';
import { selectAuthor, selectGenre, unselectAuthor, unselectGenre } from './select-book-form.js';
import { addBook } from './add-book.js';
import { removeBook } from './remove-book.js';

function assignListeners() {
  searchForm.oninput = e => searchForm[e.target.name == 'book' ? 'author' : 'book'].value = '';

  searchForm.onsubmit = () => {
    const type = searchForm.book.value ? 'book' : 'author';
    const query = searchForm[type].value;

    const items = search(type, query);

    renderFound(type, items);
    goTo(type + 's');
  }

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

  addAuthorBookBtn.onclick = () => {
    const authorId = +authorContent.dataset.id;

    prepAddBookForm(authorId);
    addBookModal.showModal();
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

  addBookAuthorBtn.onclick = () => {
    const bookId = +bookContent.dataset.id;

    // new modal/form needed
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
