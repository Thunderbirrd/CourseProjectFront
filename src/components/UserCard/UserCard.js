import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css';

const UserCard = ({ user, setCurrentUser }) => {
  return (
    <Link
      to={`user/${user.id}`}
      className='job-card'
      onClick={(e) => setCurrentUser(user)}
    >
      <div className='job-card__body'>
        <p className='job-card__details'>
          <span className='job-card__details-oval'></span>
        </p>
        <h3 className='job-card__position'>{user.name}</h3>
        <p className='job-card__details'>{user.service_type}</p>
      </div>
      <div className='job-card__footer'>
        <h4 className='job-card__location'>{user.location}</h4>
      </div>
    </Link>
  );
};

export default UserCard;
