import React from 'react';
import {useSelector} from 'react-redux';
import {currentlySelected} from '../../features/userSlice';
import AchievementItem from './AchievementItem';

function AchievementsList(props: { showAchievements: boolean, toggleAchievements: any }) {
  const achievements = useSelector(currentlySelected).achievements;

  const populateAchievementsList = achievements.map((achievement, index) => (
    <AchievementItem key={`${achievement.name}${index}`} achievement={achievement} />
  ));

  return (
    <div
      className='absolute top-0 w-full h-full bg-white
                 shadow-2xl duration-100 no-scrollbar overflow-y-scroll'
      style={{left: (props.showAchievements ? '0%' : '110%')}}
    >
      <button
        type='button'
        className='flex items-center mb-2 px-4 pt-3 pb-1 w-full text-gray-600 font-bold bg-white'
        onClick={() => props.toggleAchievements(false)}
      >
        <i className='icon-16 icon__back bg-gray-900 mr-2' />
        <span>
          Achievements
        </span>
      </button>
      {populateAchievementsList}
    </div>
  );
}

export default AchievementsList;
