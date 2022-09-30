import React from 'react'
import './AddCard.css'
class AddCard extends React.Component {
    render() {

        return (
            <button className='button__add' onClick={this.props.onClick}></button>
        )
    }
}

export default AddCard