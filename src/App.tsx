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
      <header className="flex justify-end px-10 py-4">
        <ProfileMenu company={sampleCompany} currentlySelected={currentCompany} />
      </header>
      <Counter />
    </div>
  );
}

export default App;
