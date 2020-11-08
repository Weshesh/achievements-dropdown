import React, {useState} from 'react';
import ProfileMenuAchievementsList from '../ProfileMenuAchievementsList';
import ProfileMenuAchievements from './ProfileMenuAchievements';
import ProfileMenuButton from './ProfileMenuButton';
import ProfileMenuCompanybutton from './ProfileMenuCompanyButton';

function ProfileMenu(props: { show: boolean }) {
  const [isAchievementsOpen, toggleAchievements] = useState<boolean>(false);
  const sampleCompanies = [
    'lalala',
    'shalalal',
    'nanana',
  ];

  const populateCompanies = sampleCompanies.map((company) => (
    <ProfileMenuCompanybutton key={company} label={company} isActive={false} />
  ));

  return (
    <div
      className={`absolute rounded-xl bg-white shadow-xl duration-200 z-20 ${props.show ? 'visible opacity-100' : 'invisible opacity-0'} overflow-x-hidden`}
      style={{top: '100%', width: '304px'}}
    >
      <div className='w-full h-full'>
        <div className='px-4 pt-3 pb-1 text-gray-600 font-bold'>
          Your companies
        </div>
        <div className='border-b border-gray-200'>
          {populateCompanies}
        </div>
        <div className='border-b border-gray-200' onClick={() => toggleAchievements(true)}>
          <ProfileMenuAchievements />
        </div>
        <div className='border-b border-gray-200'>
          <ProfileMenuButton label='Get the mobile app' iconClass='icon__mobile' />
          <ProfileMenuButton label='Community' iconClass='icon__community' />
          <ProfileMenuButton label='Knowledge base' iconClass='icon__knowledge' />
        </div>
        <ProfileMenuButton label='Settings' iconClass='icon__cog' />
        <ProfileMenuButton label='Log out' iconClass='icon__log-out' red />
      </div>

      <div
        className='absolute top-0 w-full h-full bg-white shadow-2xl duration-200 overflow-hidden'
        style={{left: (isAchievementsOpen ? '0%': '110%')}}
      >
        <button
          type='button'
          className='flex items-center px-4 pt-3 pb-1 text-gray-600 font-bold'
          onClick={() => toggleAchievements(false)}
        >
          <i className='icon-16 icon__back bg-gray-900 mr-2' />
          <span>
            Achievements
          </span>
        </button>
        <ProfileMenuAchievementsList />
      </div>
    </div>
  );
}

export default ProfileMenu;
