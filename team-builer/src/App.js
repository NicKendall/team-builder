import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Form";

function App() {
  
  const [test, setTest] = useState ([
    {
      name: "Nic",
      email: "nic@nic.com",
      role: "student"
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Form testProps={test}/>

      </header>
    </div>
  );
}

export default App;
