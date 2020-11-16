import React from 'react';
import {useDispatch} from 'react-redux';
import {Company, selectCompany} from '../../features/counter/userSlice';

interface CompanyButtonProps {
  inputCompany: Company,
  isActive: boolean
}

function ProfileMenuCompanybutton(props: CompanyButtonProps) {
  const dispatch = useDispatch();

  return (
    <button
      type='button'
      className='px-4 py-3 w-full font-bold text-left border-gray-100
               hover:bg-gray-100 focus:bg-gray-200'
      onClick={() => dispatch(selectCompany(props.inputCompany))}
    >
      Tralal{props.inputCompany.name}
    </button>
  );
}

export default ProfileMenuCompanybutton;
