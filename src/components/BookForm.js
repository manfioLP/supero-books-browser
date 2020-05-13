import React, { useContext, useState } from 'react'
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    isbn: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBook();
    setBook({
      title: '',
      author: '',
      year: '',
      isbn: '',
    })
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value })
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Book</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={book.title}
              onChange={handleChange}
              placeholder='e.g. Auba e a Incrivel Fabrica de Lolo'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='author'
              name='author'
              value={book.author}
              onChange={handleChange}
              placeholder='e.g. Poldo del Poldera'
              className='validate'
              required
            />
            <label className='active' htmlFor='author'>
              Author
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='year'
              name='year'
              value={book.year}
              onChange={handleChange}
              placeholder='e.g. 1987'
              className='validate'
              required
            />
            <label className='active' htmlFor='year'>
              Author
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='isbn'
              name='isbn'
              value={book.isbn}
              onChange={handleChange}
              placeholder='e.g. 1234567890123'
              className='validate'
              required
            />
            <label className='active' htmlFor='isbn'>
              Author
            </label>
          </div>
          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'
            >
              <i className='material-icons right'>add_circle</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;