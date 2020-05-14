import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {

  const serverEndpoint = `https://cors-anywhere.herokuapp.com/`+'http://ec2-34-228-7-125.compute-1.amazonaws.com:1337/api';

  const getAllBooks = async (page, setBooks, setCurrentPage, setTotal) => {
    const res = await fetch(`${serverEndpoint}/book?page=${page}`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Origin': 'localhost:3000'
      })
    });
    res
      .json()
      .then(res => {
        setBooks(res.data)
        setTotal(res.total)
      })
      .catch(console.log)
  };

  const addBook = (book, setBooks) => {
    // setBooks([...books, {...book, id: uniqid() }]);
    window.alert('Not implemented')
  }

  const deleteBook = (id, setBooks) => {
    // setBooks(books.filter(book => book.id !== id));
    window.alert('Not implemented')
  }

  {/*<BookContext.Provider value={{ books, addBook, deleteBook, getAllBooks }}>*/}

  return (
    <BookContext.Provider value={{ addBook, deleteBook, getAllBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider
