import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbo from './components/Jumbotron';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Jumbo></Jumbo>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
