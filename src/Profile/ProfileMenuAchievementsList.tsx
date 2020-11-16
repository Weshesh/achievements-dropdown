import React from 'react';
import {useSelector} from 'react-redux';
import {currentlySelected} from '../features/counter/userSlice';

function ProfileMenuAchievementsList() {
  const achievements = useSelector(currentlySelected).achievements;

  const populateAchievementsList = achievements.map((achievement) => (
    <button key='e.name' type='button' className='w-full'>
      <div>
        {achievement.name}
        <p>
          {achievement.description}
        </p>
      </div>
      <div className='flex'>
        <div className='relative mt-2 mb-1 rounded-full w-full h-2 bg-gray-300'>
          <div
            className='absolute left-0 rounded-full h-2 bg-gray-800'
            style={{width: '13%'}}
          />
        </div>
        <div>
          0/1
        </div>
      </div>
    </button>
  ));

  return (
    <div className='h-full overflow-y-scroll'>
      {populateAchievementsList}
    </div>
  );
}

export default ProfileMenuAchievementsList;
