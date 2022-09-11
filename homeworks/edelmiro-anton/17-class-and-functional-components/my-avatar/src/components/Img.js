import React from 'react';
import '../styles.css';

export default class Img extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.src} alt="" className="avatar" onClick={this.props.onClick} />
      </>
    );
  }
}
