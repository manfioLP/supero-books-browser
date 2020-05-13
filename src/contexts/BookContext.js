import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Control Your Stress as a Lovatinho',
      author: 'Katupy Katupakera',
      isbn: '0123456789123',
      year: '1994',
      publisher: 'Labimboca Records'
    },
    {
      id: 2,
      title: 'Best Tapioca\'s Receipts \n 12343214123',
      author: 'Jaleclecler A.',
      isbn: '4501236789456',
      year: '2006',
      publishe: 'Best Receipts'
    },
    {
      id: 3,
      title: 'AUBAPIKABAITA - Biography',
      author: 'Poldo del Poldera',
      isbn: '9302456789123',
      year: '2012',
      publisher: 'HOTMART'
    },
    {
      id: 4,
      title: 'The best of 2019 MAMADAS',
      author: 'Osvaloko Juniosin2012',
      isbn: '8527419630123',
      year: '2019',
      publisher: 'Labimboca Records'
    },
  ]);

  const addBook = book => {
    setBooks([...books, {...book, id: uniqid() }]);
  }

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider
