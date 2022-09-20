import React from 'react';
import refreshIcon from '../refresh-icon.svg';

function AvatarTile({ avatarURL, onClick}) {
  let isRefreshing = false;
  
  return (
    <div className="avatar-tile tile" onClick={onClick}>
      <img className="avatar-tile__img" src={avatarURL} alt="avatar img" />
      <div
        className={isRefreshing ? 'avatar-tile__overlay avatar-tile__overlay_loading' : 'avatar-tile__overlay'}
      >
        <img
          className={
            isRefreshing
              ? 'avatar-tile__refresh-icon avatar-tile__refresh-icon_loading'
              : 'avatar-tile__refresh-icon'
          }
          src={refreshIcon}
          alt="refresh img"
        />
      </div>
    </div>
  );
}

export default AvatarTile;
