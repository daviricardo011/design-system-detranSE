import React from 'react'

function Card({ title, children }) {
    return (
        <div className='card card-outline'>
            <div className="card-body p-0">
                <div className='card-header'>
                    <h4>{title}</h4>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
