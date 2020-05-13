import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";


const BookTable = () => {
  const { books, deleteBook } = useContext(BookContext);

  // TODO: ver React table component
  return (
    <div className='section section-books'>
      <div className='container'>
        <h6>Books</h6>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div className='card book'>
                <div className='book-details'>
                  <div className='book-title'> {book.title} </div>
                  <div className='book-author'> {book.author} </div>
                  <div className='book-isbn'> {book.isbn} </div>
                  <div className='book-year'> {book.year} </div>
                </div>
                <div
                  onClick={() => deleteBook(book.id)}
                  className='book-delete'
                >
                  <i className='material-icons'>delete</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default BookTable;