import React from 'react'

function TextArea({ title = '', placeholder, numberOfRows, onChange, ...props }) {
    return (
        <div>
            <label>{title}</label>
            <textarea
                {...props}
                class="form-control"
                rows={numberOfRows}
                placeholder={placeholder}
                onChange={onChange}
            >
            </textarea>
        </div>
    )
}

export default TextArea
