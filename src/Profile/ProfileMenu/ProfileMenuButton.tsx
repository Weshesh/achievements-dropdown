import React from 'react';
import {useToasts} from 'react-toast-notifications';

interface Props {
  label: string,
  iconClass: string,
  action?: any,
  red?: true
}

function ProfileMenuButton(props: Props) {
  const {label, iconClass, action, red} = props;
  const {addToast} = useToasts();
  function notInUse() {
    addToast('Sorry, not yet implemented.', {appearance: 'warning', autoDismiss: true});
  };

  return (
    <button
      type='button'
      className={
        'flex items-center px-4 py-3 w-full text-left '
        + (red
          ? 'hover:bg-red-100 focus:bg-red-100'
          : 'hover:bg-gray-100 focus:bg-gray-100')
      }
      onClick={() => notInUse()}
    >
      <i className={`icon-16 ${iconClass} ${red ? 'bg-red-500': 'bg-gray-500'} mr-2`} />
      <span className={red ? 'text-red-500' : ''}>
        {label}
      </span>
    </button>
  );
}

export default ProfileMenuButton;
