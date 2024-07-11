import React from 'react';
import IdolListItem from './IdolListItem';

function AddFavoriteIdolList() {
  return (
    <div className="addFavoriteIdolList">
      <button type="button" aria-label="Add Favorite Idol">
        <IdolListItem imageClassName="addFavoriteIdol" isDeleteNecessary={false} />
      </button>
    </div>
  );
}

export default AddFavoriteIdolList;
