import React from 'react'
import './styles.css'

function IconButton({ onClick, icon }) {
    return (
        <span onClick={onClick} className='text-muted icon-button-container'>
            <i className={`icon-button ${icon}`} />
        </span>
    )
}

export default IconButton
