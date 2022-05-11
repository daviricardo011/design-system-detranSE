import React from 'react'
import './styles.css'

function StepButton({ children, onClick, icon, next = false, confirm = false, loading = false }) {
    const style = next ? 'next  btn btn-primary' : 'back btn btn-outline-primary'

    return (
        <>
            {
                loading
                    ? <button className={`btn button ${style}`} disabled>
                        <span className='spinner-border spinner-border-sm mr-2' role='status' aria-hidden='true' />
                        Carregando...
                    </button>
                    : <button className={`btn button ${style}`} onClick={onClick}>
                        {
                            !next
                                ? <i className={`button-icon ${icon}`} />
                                : confirm
                                    ? <i className={`button-icon ${icon}`} />
                                    : null

                        }
                        {children}
                        {
                            next
                                ? confirm
                                    ? null
                                    : <i className={`button-icon ${icon}`} />
                                : null
                        }
                    </button>
            }
        </>
    )
}

export default StepButton
