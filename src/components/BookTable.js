import React, {useContext, useEffect, useState} from 'react';
import { BookContext } from "../contexts/BookContext";

import { Pagination } from 'semantic-ui-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const BookTable = (filterText) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);

  const { getAllBooks } = useContext(BookContext);
  let mainRequest = {data: [], page:1, total: 0}

  useEffect( () => {
    // todo: handle errors
    mainRequest = getAllBooks(currentPage, setBooks, setCurrentPage, setTotal);
  }, [currentPage]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage.activePage);
  };

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
                {row.ISBN}
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
        <TableFooter>
          <TableRow>
            <Pagination
              activePage={currentPage}
              onPageChange={handleChangePage}
              totalPages={Math.ceil(total/10)}
              ellipsisItem={null}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )

};

export default BookTable;
