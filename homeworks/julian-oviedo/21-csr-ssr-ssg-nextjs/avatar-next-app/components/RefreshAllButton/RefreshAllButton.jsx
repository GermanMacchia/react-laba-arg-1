import React from 'react';

/* class RefreshAllButton extends React.Component {
  render() {
    return (
      <div className="bttn-container">
        <button className="bttn-container__refresh-all" onClick={this.props.onClick}>
          REFRESH ALL
        </button>
      </div>
    );
  }
} */

function RefreshAllButton({ onClick }) {
  return (
    <div className="bttn-container">
      <button className="bttn-container__refresh-all" onClick={onClick}>
        REFRESH ALL
      </button>
    </div>
  );
}

export default RefreshAllButton;
