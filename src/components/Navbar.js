import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Navbar = ({filterText, setFilterText}) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    // window.M.Sidenav.init(elems, { edge: 'right' });
  });

  return (
    <Fragment>
      <div className='nav-div'>
      <SearchBar filterText={filterText} setFilterText={setFilterText}>
      {/*<nav className='z-depth-0'>*/}
      {/*  <div className='nav-wrapper'>*/}
      {/*    <a*/}
      {/*      href='#!'*/}
      {/*      data-target='slide-out'*/}
      {/*      className='right sidenav-trigger'*/}
      {/*    >*/}
      {/*      <i className='material-icons'>menu</i>*/}
      {/*    </a>*/}
      {/*    <ul className='right hide-on-med-and-down'>*/}
      {/*      <li>*/}
      {/*        <Link to='/'>About</Link>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</nav>*/}

      {/*<ul id='slide-out' className='sidenax'>*/}
      {/*  <li>*/}
      {/*    <Link to='/' className='waves-effect sidenav-close'>*/}
      {/*      <i className='material-icons'>home</i>Home*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to='/about' className='waves-effect sidenav-close'>*/}
      {/*      <i className='material-icons'>business</i>About*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to='/contact' className='waves-effect sidenav-close'>*/}
      {/*      <i className='material-icons'>mail</i>Contact*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}

      </SearchBar>
      <button>Buscar</button>
      </div>
    </Fragment>
  );

};

export default Navbar;
