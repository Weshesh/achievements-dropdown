import React from 'react';
import {Company} from './App';

interface Props {
  company: Company,
  currentlySelected: string,
  toggleMenu: any
}

function ProfileButton(props: Props) {
  return (
    <button type='button' className='flex px-px' onClick={props.toggleMenu}>
      <div className='flex flex-col text-right p-px'>
        <span className='text-sm font-extrabold leading-tight'>
          {props.company.user}
        </span>
        <span className='text-sm text-gray-500 leading-snug'>
          {props.currentlySelected}
        </span>
      </div>
      <div className='flex items-center pl-3 pr-2 h-full'>
        <i className='icon-20 icon__cog bg-gray-900' />
      </div>
    </button>
  );
}

export default ProfileButton;
