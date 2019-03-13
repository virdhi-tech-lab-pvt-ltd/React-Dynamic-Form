import React from 'react';

const Errors = ({errors}) => {
    return (
      <div className='errors'>
      	{errors.map(error =>  <div>{error.toUpperCase()}</div>)}
      </div>
    );
}


export default Errors;
