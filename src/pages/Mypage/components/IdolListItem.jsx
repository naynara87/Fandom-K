import React from 'react';
import PropTypes from 'prop-types';
import './IdolListItem.css';
import deleteButton from '../images/btn_delete.svg';
import testImg from './moma.jpg';

function IdolListItem({ imageClassName, isDeleteNecessary }) {
  const imageClassNames = `idol-profile ${imageClassName}`;

  return (
    <div className="idol-list-item-wrapper">
      <div className="idol-list-item">
        {isDeleteNecessary && (
          <button className="deleteButton" type="button" aria-label="Delete Idol Button">
            <img src={deleteButton} alt="delete button" width="32px" height="32px" />
          </button>
        )}
        <div className="idol-profile-wrapper">
          <img className={imageClassNames} src={testImg} alt="testImg" />
        </div>
        <h1 className="idol-name">로제</h1>
        <h2 className="idol-group">블랙핑크</h2>
      </div>
    </div>
  );
}

IdolListItem.propTypes = {
  imageClassName: PropTypes.string.isRequired,
  isDeleteNecessary: PropTypes.bool.isRequired,
};

export default IdolListItem;
