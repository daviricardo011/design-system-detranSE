import React from 'react'

export default function InputText(props) {
    return (
        <div className='input-group mb-3'>
            <input
                type={props.type}
                name={props.name}
                className='form-control'
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <div className='input-group-append'>
                <div className='input-group-text'>
                    <span className={props.icon} />
                </div>
            </div>
        </div>
    )
}
