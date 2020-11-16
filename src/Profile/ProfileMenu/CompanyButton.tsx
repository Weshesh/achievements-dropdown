import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Company, currentlySelected, selectCompany} from '../../features/counter/userSlice';

interface CompanyButtonProps {
  inputCompany: Company,
}

function CompanyButton(props: CompanyButtonProps) {
  const dispatch = useDispatch();
  const currentCompany = useSelector(currentlySelected).name;

  const baseStyle = 'px-4 py-3 w-full font-bold text-left border-gray-100';
  const stateSyles = props.inputCompany.name === currentCompany
    ? 'text-green-500 bg-green-500 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20'
    : 'hover:bg-gray-100 focus:bg-gray-200';

  return (
    <button
      type='button'
      className={`${baseStyle} ${stateSyles} `}
      onClick={() => dispatch(selectCompany(props.inputCompany))}
    >
      Tralal{props.inputCompany.name}
    </button>
  );
}

export default CompanyButton;
