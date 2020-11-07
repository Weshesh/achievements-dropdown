import React from 'react';
import { Company } from './App';

function ProfileMenu(props: { company: Company, currentlySelected: string}) {
  return (
    <div className='flex px-px'>
      <div className='flex flex-col text-right p-px'>
        <span className='text-sm font-bold leading-tight'>{props.company.user}</span>
        <span className='text-sm font-light text-gray-500 leading-snug'>{props.currentlySelected}</span>
      </div>
      <i className='icon-20 icon__cog bg-red-500'></i>
    </div>
  )
}

export default ProfileMenu;
