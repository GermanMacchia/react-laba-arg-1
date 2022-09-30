import React from 'react';

import './RefreshButton.css';

const RefreshButton = ({ onclick, children }) => {
    <button className='refresh--button' onclick={onclick}>
        {children}
    </button>
};

export default RefreshButton;
