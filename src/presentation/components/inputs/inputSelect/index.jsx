import React from 'react'

function InputSelect(props) {
    return (
        <>
            <label>{props.label}</label>
            <div className='form-group'>
                <select {...props} class='form-control'>
                    {
                        props.data.map((item) => (
                            <option selected={props.selected} value={item.value} key={item.key}>{item.label}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default InputSelect

