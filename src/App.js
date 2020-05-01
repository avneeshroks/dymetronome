import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from './routes';

const history = createBrowserHistory();

function App() {
 
  return (
    <div className="App">
      <Router history={history}>
        <Routes/>
      </Router>
      {/* <Metronome plan={plan}></Metronome> */}
    </div>
  );
}

export default App;
