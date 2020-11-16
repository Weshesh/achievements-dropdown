import React, {useState} from 'react';
import {ToastProvider} from 'react-toast-notifications';
import ProfileButton from './Profile/ProfileButton';
import ProfileMenu from './Profile/ProfileMenu/ProfileMenu';

export interface Company {
  user: string,
  companies: string[],
};

function App() {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const changeMenuState = () => toggleMenu(!isMenuOpen);

  return (
    <ToastProvider
      autoDismissTimeout={1000}
      autoDismiss
    >
      <div className='App'>
        <header className='relative flex justify-end px-8 py-4'>
          <ProfileButton
            user='Elon Musk'
            toggleMenu={changeMenuState}
          />
          <div
            className={`absolute top-0 left-0 w-screen h-screen bg-gray-100 z-10
            ${isMenuOpen ? 'visible opacity-25' : 'invisible opacity-0'}`}
            onClick={() => toggleMenu(false)}
          />
          <ProfileMenu show={isMenuOpen} />
        </header>
      </div>
    </ToastProvider>
  );
}

export default App;
