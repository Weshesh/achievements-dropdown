import React from 'react';

function ProfileMenuAchievements() {
  const done = 3;
  const toDo = 11;
  const percentage = done / toDo * 100;

  return (
    <button type='button' className='px-4 py-3 w-full hover:bg-gray-100 focus:bg-gray-100'>
      <div className='flex items-center w-full text-left'>
        <i className='icon-16 icon__achievements mr-2 bg-gray-900' />
        <div>
          <b>
            Achievements
          </b>
          <div>
            {done.toString()}/{toDo.toString()} - {Math.round(percentage)}%
          </div>
        </div>
      </div>
      <div className='rounded-full my-2 w-full h-2 bg-gray-300'>
      </div>
    </button>
  );
}

export default ProfileMenuAchievements;
