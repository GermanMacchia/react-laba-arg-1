import React from 'react';

import './RefreshButton.css';

class RefreshButton extends React.Component {
    render() {

        return (

            <button className='refresh--button' onclick={this.props.onclick}>
                {this.props.children}
            </button>
        )
    }

};

export default RefreshButton;
