import React from 'react'
import './styles.css'

export default function loading() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border text-primary loadingClass' role='status'>
                <span className='sr-only'>Loading...</span>
            </div>
        </div>
    )
}