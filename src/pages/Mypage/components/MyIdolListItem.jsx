import React from 'react';
import PropTypes from 'prop-types';

import './MyIdolListItem.css';
import deleteButton from '../images/btn_delete.svg';
import testImg from './moma.jpg';

// function MyIdolListItem({ idolName, idolGroup, idolProfilePicture }) {
function MyIdolListItem({ idolName, idolGroup }) {
  return (
    <div className="idol-list-item-wrapper">
      <div className="idol-list-item my-favorite-idol">
        <button className="deleteButton" type="button" aria-label="Delete Idol Button">
          <img src={deleteButton} alt="delete button" width="32px" height="32px" />
        </button>
        <div className="idol-profile-wrapper my-favorite-idol">
          <img className="idol-profile my-favorite-idol" src={testImg} alt="testImg" />
        </div>
        <h1 className="idol-name">{idolName}</h1>
        <h2 className="idol-group">{idolGroup}</h2>
      </div>
    </div>
  );
}

MyIdolListItem.propTypes = {
  idolName: PropTypes.string.isRequired,
  idolGroup: PropTypes.string.isRequired,
  // idolProfilePicture: PropTypes.string.isRequired,
};

export default MyIdolListItem;
