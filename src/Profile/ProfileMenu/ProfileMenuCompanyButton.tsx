import React from 'react';

function ProfileMenuCompanybutton(props: {label: string, isActive: boolean}) {
  const {label} = props;

  return (
    <button
      type='button'
      className='px-4 py-3 w-full font-bold text-left border-gray-100 hover:bg-gray-100 focus:bg-gray-200 '
    >
      Tralal {label}
    </button>
  );
}

export default ProfileMenuCompanybutton;
