import React, {useState} from 'react';
import {Counter} from './features/counter/Counter';
import ProfileButton from './ProfileButton';
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
    'Tartu Agro OÜ',
  ],
};

function App() {
  const [currentCompany, setCurrentCompany] = useState<string>(sampleCompany.companies[0]);
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const changeMenuState = () => toggleMenu(!isMenuOpen);

  return (
    <div className='App'>
      <header className='relative flex justify-end px-8 py-4'>
        <ProfileButton
          company={sampleCompany}
          currentlySelected={currentCompany}
          toggleMenu={changeMenuState}
        />
        <ProfileMenu show={isMenuOpen} />
      </header>
      <Counter />
      {isMenuOpen ? 'LALALAL' : 'NONONO'}
    </div>
  );
}

export default App;
