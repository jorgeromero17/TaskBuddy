import React from 'react'
import './Invitation.css'

function Invitation({multipleTodosExist}) {

  const text = multipleTodosExist ? 'No matches' : 'Add your first task';

  return (
    <h3 className='lineUp'>{text}</h3>
  );
}

export { Invitation };