import React from 'react';
import {useToasts} from 'react-toast-notifications';
import ProfileMenuAchievements from './ProfileMenuAchievements';
import ProfileMenuButton from './ProfileMenuButton';

function ProfileMenu(props: { show: boolean }) {
  const sampleCompanies = [
    'lalala',
    'shalalal',
    'nanana',
  ];

  const populateCompanies = sampleCompanies.map((company) => (
    <div key={company} className='px-4 py-3 hover:bg-green-100'>
      Tralal {company}
    </div>
  ));

  return (
    <div className={`ProfileMenu rounded-lg bg-white shadow-lg z-10 ${props.show ? 'block' : 'hidden'}`}>
      <div className='px-4 pt-3 pb-1 text-gray-600 font-bold'>
        Your companies
      </div>
      <div className='border-b border-gray-200'>
        {populateCompanies}
      </div>
      <div className='border-b border-gray-200'>
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
  );
}

export default ProfileMenu;
