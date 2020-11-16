import React from 'react';
import {useSelector} from 'react-redux';
import {currentlySelected} from '../../features/userSlice';
import AchievementItem from './AchievementItem';

function AchievementsList() {
  const achievements = useSelector(currentlySelected).achievements;

  const populateAchievementsList = achievements.map((achievement, index) => (
    <AchievementItem key={`${achievement.name}${index}`} achievement={achievement} />
  ));

  return (
    <div className='h-full no-scrollbar overflow-y-scroll'>
      {populateAchievementsList}
    </div>
  );
}

export default AchievementsList;
