import React from 'react';
import Image from 'next/image';
/* class AvatarCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card__avatar" src={this.props.avatarImg} alt=""></img>
        <img className="card__refresh-icon" src={refreshImg} onClick={this.props.onClick} alt=""></img>
      </div>
    );
  }
} */

function AvatarCard({ onClick, avatarImg }) {
  return (
    <div className="card">
      <img className="card__avatar" src={avatarImg} alt="AvatarImg"></img>
      <Image
        layout="fill"
        className="card__refresh-icon"
        src="/images/refresh.svg"
        alt="refreshImG"
        onClick={onClick}
      ></Image>
    </div>
  );
}

export default AvatarCard;
