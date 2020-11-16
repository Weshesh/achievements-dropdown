import React from 'react';
import {useSelector} from 'react-redux';
import {currentlySelected} from '../features/userSlice';


function ProfileButton(props: {user: string, toggleMenu: any}) {
  const company = useSelector(currentlySelected);

  return (
    <button
      type='button'
      className='flex rounded px-px hover:bg-gray-100 focus:bg-gray-100'
      onClick={props.toggleMenu}
    >
      <div className='flex flex-col text-right p-px pl-2'>
        <span className='text-sm font-extrabold leading-tight'>
          {props.user}
        </span>
        <span className='text-sm text-gray-500 leading-snug'>
          {company.name}
        </span>
      </div>
      <div className='flex items-center pl-3 pr-2 h-full'>
        <i className='icon-20 icon__cog bg-gray-900' />
      </div>
    </button>
  );
}

export default ProfileButton;
