import React from 'react';

export default class RefreshButton extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  componentWillUnmount() {
    alert('Avatars will removed. Add new ones again');
  }

  render() {
    return (
      <>
        <button
          className="refreshButton"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {console.log(this.state.show)}
          CLICK ME TO REFRESH AVATARS
        </button>
        {/* {this.state.show ? <AddAvatar /> : null} */}
      </>
    );
  }
}
