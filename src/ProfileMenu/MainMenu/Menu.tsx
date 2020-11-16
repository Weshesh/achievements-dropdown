import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AchievementsList from '../Achievements/AchievementsList';
import MenuButton from './MenuButton';
import CompanyButton from './CompanyButton';
import {companyList} from '../../features/userSlice';
import AchievementButton from '../Achievements/AchievementButton';


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
      className={`absolute rounded-xl bg-white shadow-xl delay-75 duration-300 z-20
      ${props.showMenu ? 'visible opacity-100' : 'invisible opacity-0'} overflow-hidden`}
      style={{top: '100%', width: '304px'}}
    >
      <div className='relative w-full h-full'>
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
          <AchievementButton />
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
      <AchievementsList showAchievements={isAchievementsOpen} toggleAchievements={toggleAchievements} />
    </div>
  );
}

export default Menu;
