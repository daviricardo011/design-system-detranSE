import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { urls } from '../../../../../main/routes/urls'
import LogoGov from '../../../../../main/assets/images/LogoGov.svg'
import Logo from '../../../../../main/assets/images/Logo-completo-branco.svg'


function Navbar(props) {

    return (
        <div className="containerNavBar fixed-top">
            <div className='pl-2 pr-2 backgroundHeaderNavbar'>
                <div className='d-flex justify-content-between'>
                    <img src={Logo} alt='Detran Logo' className='brand-image imgLogo' />
                    <img src={LogoGov} alt='Detran Gov Logo' className='brand-image imgLogo' />
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-white navbar-light navbar-color">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <span className='nav-link ' data-widget='pushmenu' role='button'><i className='ml-2 fas fa-bars' /></span>
                        </li>
                        <li className='nav-item d-none d-sm-inline-block'>
                            <a href={'https://www.detran.se.gov.br/#gsc.tab=0'} className='nav-link'>Início</a>
                        </li>
                        <li className='nav-item d-none d-sm-inline-block'>
                            <a href={'https://www.detran.se.gov.br/#gsc.tab=0'} className='nav-link'>Configurações</a>
                        </li>
                    </ul>

                    <ul className='navbar-nav ml-auto'>
                        <div className="btn-group">
                            <button type="button" className=" btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-circle mr-2"></i>
                                {props.userData.name}
                            </button>
                            <div className="dropdown-menu itensDropdown dropdown-menu-right">
                                <div>
                                    <div className="dropdown-item" title="grupo">
                                        <i className='fas fa-users ' />
                                        <a className='sair'> Grupo: Externo</a>
                                    </div>
                                    <div className="dropdown-item" title="data">
                                        <i className='fas fa-calendar-alt ' />
                                        <a className='sair'> Data/Hora: 09/05/2022 13:11</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div >

    )
}

export default Navbar

