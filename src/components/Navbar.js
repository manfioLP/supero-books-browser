import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({filterText, setFilterText}) => {
  // useEffect(() => {
  // });
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = open => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <Fragment>
      <div className='nav-div'>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        {/*<button onClick={toggleDrawer(true)}> drawer </button>*/}
        <SwipeableDrawer
          anchor='left'
          open={drawerState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >

          <List>
            {['Home', 'Sobre', 'Contato'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        {/*TODO: Contact and About pages*/}
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <button>Buscar</button>
      </div>
    </Fragment>
  );

};

export default Navbar;
