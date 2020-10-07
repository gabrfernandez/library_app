import React from 'react';
import './App.css';
import {Redirect, Router} from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Library from './views/Library';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="books/" />
        {/* <Detail path="books/:id" /> */}
        <Library path="books/library" />
        <Redirect
          from="/"
          to='/books'
          noThrow
        />
      </Router>

    </div>
  );
}

export default App;
