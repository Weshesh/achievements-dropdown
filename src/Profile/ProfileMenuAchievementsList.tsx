import React from 'react';

function ProfileMenuAchievementsList() {
  const done = 3;
  const toDo = 11;
  const percentage = done / toDo * 100;

  const achievementsItem = (
    <button type='button' className='w-full'>
      <div>
        Install mobile app
        <p>
          See your farm data wherever you go, for you and for your workers.
        </p>
      </div>
      <div className='flex'>
        <div className='relative mt-2 mb-1 rounded-full w-full h-2 bg-gray-300'>
          <div className='absolute left-0 rounded-full h-2 bg-gray-800' style={{width: '13%'}}></div>
        </div>
        <div>
          0/1
        </div>
      </div>
    </button>
  );

  return (
    <div className='h-full overflow-y-scroll'>
      {achievementsItem}
      {achievementsItem}
      {achievementsItem}
      {achievementsItem}
      {achievementsItem}
      {achievementsItem}
      <button type='button' className='w-full'>
      <div>
        Install mobile app
        <p>
          See your farm data wherever you go, for you and for your workers.
        </p>
      </div>
      <div className='flex'>
        <div className='relative mt-2 mb-1 rounded-full w-full h-2 bg-gray-300'>
          <div className='absolute left-0 rounded-full h-2 bg-gray-800' style={{width: '13%'}}></div>
        </div>
        <div>
          0/1
        </div>
      </div>
    </button>
    </div>
  );
}

export default ProfileMenuAchievementsList;
