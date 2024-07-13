import React from 'react';
import PropTypes from 'prop-types';

import './AddIdolListItem.css';
import checkIcon from '../images/ic_check.svg';

function AddIdolListItem({ isSelected = false, idolData }) {
  const { name, group, profilePicture } = idolData;

  return (
    <div className="idol-list-item-wrapper">
      <div className="idol-list-item add-favorite-idol">
        <div className="idol-profile-wrapper add-favorite-idol">
          {isSelected ? (
            <div className="selected-idol-wrapper">
              <div className="selected-idol-color" />
              <img className="selected-idol-check" src={checkIcon} alt="Selected check icon" />
              <img className="idol-profile add-favorite-idol" src={profilePicture} alt="Idol profile" />
            </div>
          ) : (
            <img className="idol-profile add-favorite-idol" src={profilePicture} alt="Idol profile" />
          )}
        </div>
        <h1 className="idol-name">{name}</h1>
        <h2 className="idol-group">{group}</h2>
      </div>
    </div>
  );
}

AddIdolListItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  idolData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddIdolListItem;
