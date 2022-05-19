import React from 'react';

import './UserDetails.css';

const UserDetails = ({ currentUser }) => {
  return (
    <div className='job-details'>
      <div className='job-details__top'>
        <div className='job-details__info'>
          <p className='job-details__posted'>
            <span className='job-details__posted-oval'></span>
          </p>
          <h3 className='job-details__position'>{currentUser.name}</h3>
            <h4 className='job-details__position'>{currentUser.service_type}</h4>
          <h4 className='job-details__location'>{currentUser.location}</h4>
        </div>
      </div>
      <div className='job-details__body'>
        <div className='job-details__description'>
          <p className='job-details__description-para'>
            {currentUser.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
