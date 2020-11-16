import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Company, currentlySelected, selectCompany} from '../../features/userSlice';

interface CompanyButtonProps {
  inputCompany: Company,
}

function CompanyButton(props: CompanyButtonProps) {
  const dispatch = useDispatch();
  const currentCompany = useSelector(currentlySelected).name;

  const isSelected = props.inputCompany.name === currentCompany ? true : false;

  const baseStyle = 'px-4 py-3 w-full font-bold text-left border-gray-100';
  const stateSyles = isSelected
    ? 'text-green-500 bg-green-500 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20'
    : 'hover:bg-gray-100 focus:bg-gray-200';

  return (
    <button
      type='button'
      className={`${baseStyle} ${stateSyles} `}
      onClick={() => dispatch(selectCompany(props.inputCompany))}
    >
      <div className='flex justify-between'>
        {props.inputCompany.name}
        {
          isSelected
            ? (
              <i className='icon-20 icon__success ml-3 bg-green-500' />
            )
            : ''
        }
      </div>
      <small className='block'>
        {props.inputCompany.description}
      </small>
    </button>
  );
}

export default CompanyButton;
