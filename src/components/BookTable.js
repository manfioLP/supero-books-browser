import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const BookTable = (filterText) => {
  const { books, deleteBook } = useContext(BookContext);
  
  return (
    <TableContainer component={Paper}>
      <Table className='' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Livro</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Editora</TableCell>
            <TableCell>Ano</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.title}
                <br/>
                {row.isbn}
              </TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.publisher}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>
                  <i><u>Detalhes</u></i>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

};

export default BookTable;
