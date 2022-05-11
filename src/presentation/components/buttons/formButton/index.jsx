import React from 'react'

export default function FormButton(props) {
    return (
        <>
            {
                props.loading
                    ?
                    <div className='input-group mb-3'>
                        <button className='btn btn-primary btn-block' type='button' disabled>
                            <span className='spinner-border spinner-border-sm mr-2' role='status' aria-hidden='true'/>
                            Carregando...
                        </button>
                    </div>
                    :
                    <div className='input-group mb-3'>
                        <button onClick={props.onClick} className='btn btn-primary btn-block' type={props.type || 'submit'}>{props.text}</button>
                    </div>
            }
        </>
    )
}

