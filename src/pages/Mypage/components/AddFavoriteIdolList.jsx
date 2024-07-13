import React, { useState } from 'react';

import plusIcon from '../images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import AddIdolListItem from './AddIdolListItem';
import useIdolData from '../hooks/useIdolData';

function AddFavoriteIdolList() {
  const idolData = useIdolData();

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectIdolButtonClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div className="add-favorite-idol-list">
        {idolData.map((idol) => {
          return (
            <button key={idol.id} type="button" aria-label="Add Favorite Idol" onClick={handleSelectIdolButtonClick}>
              <AddIdolListItem isSelected={isSelected} idolData={idol} />
            </button>
          );
        })}
      </div>
      <button className="add-favorite-idol-button" type="button" aria-label="Add Favorite Idol Button">
        <img className="button-plus-icon" src={plusIcon} alt="plus icon" />
        추가하기
      </button>
    </>
  );
}

export default AddFavoriteIdolList;
