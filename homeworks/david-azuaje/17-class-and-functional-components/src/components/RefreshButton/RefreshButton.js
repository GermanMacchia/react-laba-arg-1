import React from "react";

import "./RefreshButton.css";

class RefreshButton extends React.Component {
    render() {
        return (
            <button className="refresh--button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default RefreshButton;
