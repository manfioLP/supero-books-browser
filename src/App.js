import React from 'react';
import BookContextProvider from './contexts/BookContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import About from './pages/about'
import Contact from './pages/contact'
import './App.css';

function App() {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
}

export default App;
