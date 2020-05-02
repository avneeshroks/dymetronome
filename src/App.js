import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { HashRouter } from "react-router-dom";
import Routes from './routes';

const history = createBrowserHistory();

function App() {
 
  return (
    <div className="App">
      <HashRouter history={history}>
        <Routes/>
      </HashRouter>
      {/* <Metronome plan={plan}></Metronome> */}
    </div>
  );
}

export default App;
