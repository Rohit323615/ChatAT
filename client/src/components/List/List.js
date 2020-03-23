import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';

import './List.css';

const List = ({ users }) => (
  <div className="textContainer">
      <h1 className="user">Online</h1>
    {
      users
        ? (
          <div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default List;