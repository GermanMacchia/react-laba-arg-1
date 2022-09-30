import React from "react";

import './Card.css';

class Card extends React.Component {

    render() {

        return (
            <div className='container__image'>
                <div
                    className='image'
                    style={{ backgroundImage: `url(${this.props.src})` }}
                    onClick={this.props.onClick}
                ></div>
                <div className={this.props.loader && 'overlay loading'}></div>
            </div>
        )
    }
}

export default Card