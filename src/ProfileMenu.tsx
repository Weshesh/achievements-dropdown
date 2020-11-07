import React from 'react';

function ProfileMenu(props: {show: boolean}) {
  const sampleCompanies = [
    'lalala',
    'shalalal',
    'nanana',
  ];

  const populateCompanies = sampleCompanies.map((company) => (
    <div key={company} className='px-4 py-3 hover:bg-green-200'>
      Tralal {company}
    </div>
  ));

  return (
    <div className={`ProfileMenu rounded-lg bg-white shadow-lg z-index-10 ${props.show ? 'block' : 'hidden'}`}>
      <div className='px-4 pt-3 pb-1 text-gray-600 font-bold'>
        Your companies
      </div>
      <div className='border-b border-gray-200'>
        {populateCompanies}
      </div>
      <div className='border-b border-gray-200'>
        Achievements
      </div>
      <div className='border-b border-gray-200'>
        <div>
          Get the mobile app
        </div>
        <div>
          Community
        </div>
        <div>
          Knowledge base
        </div>
      </div>
      <div>
        <div>
          Settings
        </div>
        <div>
          Log out
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
