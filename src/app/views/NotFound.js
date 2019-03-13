import React from 'react';
import I18n from 'app/common/i18n';
// import DataNotFound from 'app/assets/Not_found.png';


const NotFound = (props) => {
  return (
    <div className='center py2 px4'>
      <div className='px4'>{I18n.t('en.common.not_found')}</div>
    </div>
  )
}

export default NotFound;



// <div className='px4'>{I18n.t('en.common.not_found')}</div>
