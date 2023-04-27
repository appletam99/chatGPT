import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  
  useEffect(() =>{
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: 'Bearer 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', 'OpenAI-Organization': 'test' },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": this.content}],
        "temperature": 0.7
      })
    };
    
    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        .then((response) => response.json())
        .then(async (json) => {
          console.log(json);
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
