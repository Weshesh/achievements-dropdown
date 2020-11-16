import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ProfileMenuAchievementsList from '../ProfileMenuAchievementsList';
import ProfileMenuAchievements from './ProfileMenuAchievements';
import MenuButton from './MenuButton';
import CompanyButton from './CompanyButton';
import {companyList} from '../../features/userSlice';


function Menu(props: { showMenu: boolean }) {
  const [isAchievementsOpen, toggleAchievements] = useState<boolean>(false);
  const companies = useSelector(companyList);

  useEffect(() => {
    if (props.showMenu === false) {
      toggleAchievements(false);
    }
  });

  const populateCompanies = companies.map((company) => (
    <CompanyButton
      key={company.name}
      inputCompany={company}
    />
  ));

  return (
    <div
      className={`absolute rounded-xl bg-white shadow-xl duration-200 z-20
      ${props.showMenu ? 'visible opacity-100' : 'invisible opacity-0'} overflow-x-hidden`}
      style={{top: '100%', width: '304px'}}
    >
      <div className='w-full h-full'>
        <div className='px-4 pt-3 pb-1 text-gray-600 font-bold'>
          Your companies
        </div>
        <div className='border-b border-gray-200'>
          {populateCompanies}
        </div>
        <div
          className='border-b border-gray-200'
          onClick={() => toggleAchievements(true)}
        >
          <ProfileMenuAchievements />
        </div>
        <div className='border-b border-gray-200'>
          <MenuButton
            label='Get the mobile app' iconClass='icon__mobile'
          />
          <MenuButton
            label='Community'
            iconClass='icon__community'
          />
          <MenuButton
            label='Knowledge base'
            iconClass='icon__knowledge'
          />
        </div>
        <MenuButton label='Settings' iconClass='icon__cog' />
        <MenuButton label='Log out' iconClass='icon__log-out' red />
      </div>

      <div
        className='absolute top-0 w-full h-full bg-white
                   shadow-2xl duration-200 overflow-hidden'
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

export default Menu;
