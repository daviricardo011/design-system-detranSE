import React from 'react'
import NumberFormat from 'react-number-format'

function InputNumber({ label, format, mask = '_', ...props }) {
    return (
        <>
            <label>{label}</label>
            <div className='form-group'>
                <NumberFormat
                    {...props}
                    className='form-control'
                    format={format}
                    allowEmptyFormatting
                    mask={mask}
                />
            </div>
        </>
    )
}

export default InputNumber
