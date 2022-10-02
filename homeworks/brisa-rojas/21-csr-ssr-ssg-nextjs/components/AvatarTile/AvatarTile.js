import React from 'react';
import refreshIcon from '../../assets/refresh-icon.svg';
import styles from './styles.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function AvatarTile({ avatarURL, onClick, isRefreshing }) {
  return (
    <div className={cx({'avatar-tile': true})} onClick={onClick}>
      <img className={cx({'avatar-tile__img' : true})} src={avatarURL} alt="avatar img" />
      <div
        className={cx({
          'avatar-tile__overlay avatar-tile__overlay_loading': isRefreshing,
          'avatar-tile__overlay': !isRefreshing,
        })}
      >
        <img
          className={cx({
            'avatar-tile__refresh-icon avatar-tile__refresh-icon_loading': isRefreshing,
            'avatar-tile__refresh-icon': !isRefreshing,
          })}
          src={refreshIcon}
          alt="refresh img"
        />
      </div>
    </div>
  );
}

export default AvatarTile;
