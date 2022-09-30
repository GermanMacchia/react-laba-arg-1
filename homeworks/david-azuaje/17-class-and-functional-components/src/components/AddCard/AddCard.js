import React from 'react'
import './AddCard.css'
const AddCard = ({ onClick }) => {
    return (
        <button className='button__add' onClick={onClick}></button>
    )
}

export default AddCard