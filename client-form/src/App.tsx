// import React from 'react';
import { routes } from './route';
import { Router } from 'react-navi';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router routes={routes} />
    </div>
  );
}

export default App;
