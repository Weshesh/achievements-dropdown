import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProfileMenu from './ProfileMenu';

export interface Company {
  user: string,
  companies: string[],
}

const sampleCompany = {
  user: 'Elon Musk',
  companies: [
    'Goldenpõld OÜ',
    'Kiljatootja AS',
    'Tartu Agro OÜ'
  ]
}

function App() {
  const [currentCompany, setCurrentCompany] =  useState<string>(sampleCompany.companies[0]);

  return (
    <div className="App">
      <header className="flex justify-end px-8 py-4">
        <ProfileMenu company={sampleCompany} currentlySelected={currentCompany} />
      </header>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
