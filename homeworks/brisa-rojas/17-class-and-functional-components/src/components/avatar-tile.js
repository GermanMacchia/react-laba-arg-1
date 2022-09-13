import React from 'react';
import refreshIcon from '../refresh-icon.svg';


class AvatarTile extends React.Component {
  render() {
    return (
      <div className="avatar-tile tile" onClick={this.props.onClick}>
        <img className="avatar-tile__img" src={this.props.avatarURL} alt="avatar img" />
        <div className="avatar-tile__overlay">
          <img className="avatar-tile__refresh-icon" src={refreshIcon} alt="refresh img" />
        </div>
      </div>
    );
  }
}

export default AvatarTile;