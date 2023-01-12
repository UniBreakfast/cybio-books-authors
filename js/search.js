export { search };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { formatFullName } from './format.js';

function search(type, query) {
  query = query.trim().toLowerCase();

  if (type == 'book') {
    return books.filter(book => book.title.toLowerCase().includes(query));
  }
  
  if (type == 'author') {
    const parts = query.split(' ');

    return authors.filter(author => {
      const fullName = formatFullName(author).toLowerCase();

      return parts.every(part => fullName.includes(part));
    });
  }
}
