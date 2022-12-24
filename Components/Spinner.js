import React from 'react';
import Ghost from './giphy.gif';
const Spinner = () => {
  return (
    <div className='text-center mx-auto'>
    <img  src={Ghost} width={116} alt="loading"/>
        </div>
  )
}

export default Spinner;