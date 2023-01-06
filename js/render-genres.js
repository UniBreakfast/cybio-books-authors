export { renderGenres };

import { genres } from '../data/genres.js';
import { books } from '../data/books.js';
import { genresTBody } from './elements.js';

function renderGenres() {
  genresTBody.innerHTML = genres.map(genre => {
    const bookCount = books.filter(book => book.genres.includes(genre.id)).length;
    
    return `
      <tr data-id="${genre.id}">
        <td>${genre.name}</td>
        <td>${bookCount}</td>
        <td>
          <button class="view-btn">view</button>
        </td>
      </tr>
    `
  }).join('');
}
