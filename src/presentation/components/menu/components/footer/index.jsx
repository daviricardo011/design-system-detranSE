import React from 'react'
import './styles.css'

function Footer(props) {

    return (
        <footer className={`main-footer ${props.className}`}>
            <div className='float-right d-none d-sm-block'>
                <b>Versão</b> 1.0.0
            </div>
            <strong>Copyright © 2020-2021.</strong> Todos os direitos reservados.
        </footer>
    )
}

export default Footer

