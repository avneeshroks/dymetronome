import React from 'react';
import './App.css';
import { Metronome } from './metronome/metronome';

function App() {

  const plan = [
    {
      tempo: 40,
      duration: 0.1
    },
    {
      tempo: 60,
      duration: 0.1
    },
    {
      tempo: 80,
      duration: 0.1
    },
    {
      tempo: 120,
      duration: 0.2
    },
    {
      tempo: 210,
      duration: 0.2
    },
  ];

  
  return (
    <div className="App">
      <Metronome plan={plan}></Metronome>
    </div>
  );
}

export default App;
