import React from 'react';
import addButton from '../assets/add-button.png';
import '../styles.css';

export default class AddButton extends React.Component {
  render() {
    return <img className="addButton" onClick={this.props.onClick} src={addButton} />;
  }
}
