import React from 'react';


function AchievementButton() {
  const done = 3;
  const toDo = 11;
  const percentage = done / toDo * 100;

  return (
    <button type='button' className='px-4 py-2 w-full hover:bg-gray-100 focus:bg-gray-200'>
      <div className='flex items-center w-full text-left'>
        <i className='icon-22 icon__achievements mr-3 bg-gray-900' />
        <div>
          <b>
            Achievements
          </b>
          <div>
            {done.toString()}/{toDo.toString()} - {Math.round(percentage)}%
          </div>
        </div>
      </div>
      <div className='relative mt-2 mb-1 rounded-full w-full h-2 bg-gray-300'>
        <div className='absolute left-0 rounded-full h-2 bg-gray-800' style={{width: '13%'}}></div>
      </div>
    </button>
  );
}

export default AchievementButton;
