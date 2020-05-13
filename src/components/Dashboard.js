import React, { Fragment } from 'react';
import BookTable from './BookTable';
import BookForm from './BookForm';

const Dashboard = () => {
  return (
    <Fragment>
      <BookTable />
      <BookForm />
    </Fragment>
  );
};

export default Dashboard;