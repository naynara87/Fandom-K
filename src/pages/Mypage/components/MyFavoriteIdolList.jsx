import React from 'react';
import './MyFavoriteIdolList.css';
import MyIdolListItem from './MyIdolListItem';

function MyFavoriteIdolList() {
  const myFavoriteIdolList = [...JSON.parse(localStorage.getItem('my-favorite-idol'))];

  return (
    <div className="my-favorite-idol-list">
      {myFavoriteIdolList.map((idol) => {
        return (
          <MyIdolListItem
            key={idol.id}
            idolName={idol.name}
            idolGroup={idol.group}
            idolProfilePicture={idol.profilePicture}
          />
        );
      })}
    </div>
  );
}

export default MyFavoriteIdolList;
