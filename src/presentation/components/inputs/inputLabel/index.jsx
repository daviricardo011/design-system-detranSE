import React from 'react'

function InputLabel(props) {
    return (
        <div className={`form-group ${props.className}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props} type={props.type} className='form-control' id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default InputLabel


