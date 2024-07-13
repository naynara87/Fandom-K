import React, { useState } from 'react';

import plusIcon from '../images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import AddIdolListItem from './AddIdolListItem';
import useIdolData from '../hooks/useIdolData';

function AddFavoriteIdolList() {
  const idolData = useIdolData();

  const [isSelected, setIsSelected] = useState(new Array(idolData.length).fill(false));

  const handleSelectIdolButtonClick = (index) => {
    const updatedSelection = [...isSelected];
    updatedSelection[index] = !updatedSelection[index];
    setIsSelected(updatedSelection);
  };

  return (
    <>
      <div className="add-favorite-idol-list">
        {idolData.map((idol, index) => {
          return (
            <button
              key={idol.id}
              type="button"
              aria-label="Add Favorite Idol"
              onClick={() => handleSelectIdolButtonClick(index)}
            >
              <AddIdolListItem isSelected={isSelected[index]} idolData={idol} />
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
