import React from 'react'
import './RefreshButton.css'
const RefreshButton = ({ onClick, children }) => {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    )
}

export default RefreshButton