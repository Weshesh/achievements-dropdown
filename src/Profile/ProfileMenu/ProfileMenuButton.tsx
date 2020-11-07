import React from 'react';

function ProfileMenuButton(props: {label: string, iconClass: string, action: any, red?: true}) {
  const {label, iconClass, action, red} = props;

  return (
    <button
      type='button'
      className={`flex items-center px-4 py-3 w-full text-left ${red ? 'hover:bg-red-100 focus:bg-red-100' : 'hover:bg-gray-100 focus:bg-gray-100'}`}
    >
      <i className={`icon-16 ${iconClass} ${red ? 'bg-red-500': 'bg-gray-500'} mr-2`} />
      <span className={red ? 'text-red-500' : ''}>
        {label}
      </span>
    </button>
  );
}

export default ProfileMenuButton;
