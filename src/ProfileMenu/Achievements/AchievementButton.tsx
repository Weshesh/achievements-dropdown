import React from 'react';
import {useSelector} from 'react-redux';
import {currentlySelected} from '../../features/userSlice';


function AchievementButton() {
  const achievementsList = useSelector(currentlySelected).achievements;

  let sumDone = 0;
  achievementsList.forEach((e) => {
    sumDone += e.done;
  });
  let sumToDo = 0;
  achievementsList.forEach((e) => {
    sumToDo += e.toDo;
  });

  const calculatePercentage = Math.round(sumDone / sumToDo * 100);

  return (
    <button type='button' className='px-4 py-2 w-full hover:bg-gray-100 focus:bg-gray-200'>
      <div className='flex items-center w-full text-left'>
        <i className='icon-22 icon__achievements mr-3 bg-gray-900' />
        <div>
          <b>
            Achievements
          </b>
          <div>
            {sumDone.toString()}/{sumToDo.toString()} - {calculatePercentage}%
          </div>
        </div>
      </div>
      <div className='relative mt-2 mb-1 rounded-full w-full h-2 bg-gray-300'>
        <div className='absolute left-0 rounded-full h-2 bg-gray-800' style={{width: (calculatePercentage + '%')}}></div>
      </div>
    </button>
  );
}

export default AchievementButton;
