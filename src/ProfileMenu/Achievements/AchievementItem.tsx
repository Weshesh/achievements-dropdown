import React from 'react';
import {Achievement} from '../../features/userSlice';

function AchievementItem(props: {achievement: Achievement}) {
  const calculatePercentage = Math.round(props.achievement.done / props.achievement.toDo * 100);
  const isCompleted = props.achievement.toDo === props.achievement.done ? true : false;
  const getCompletionValue = (props.achievement.showPercentage)
    ? calculatePercentage + '%'
    : (props.achievement.done + '/' + props.achievement.toDo);

  return (
    <button type='button' className='px-4 py-2 w-full hover:bg-gray-100 focus:bg-gray-200'>
      <div className='text-left'>
        <div className={`font-bold leading-snug {isCompleted ? 'text-green-500' : ''}`}>
          {props.achievement.name}
        </div>
        <div className='text-gray-500 leading-tight'>
          {props.achievement.description}
        </div>
      </div>
      <div className='flex'>
        <div className='relative flex mt-2 mb-1 rounded-full w-full h-2 bg-gray-300' >
          <div
            className={`absolute left-0 rounded-full h-2 ${isCompleted ? 'bg-green-500 ': 'bg-gray-800'}`}
            style={{width: (calculatePercentage + '%')}}
          />
        </div>
        <div className='ml-3'>
          {isCompleted
            ? <i className='icon-20 icon__success ml-3 bg-green-500' />
            : getCompletionValue}
        </div>
      </div>
    </button>
  );
}

export default AchievementItem;
