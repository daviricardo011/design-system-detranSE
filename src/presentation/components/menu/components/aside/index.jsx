import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../../../main/assets/images/logo-colorido.svg'
import './styles.css'
import { urls } from '../../../../../main/routes/urls'
import MenuOption from './components/menuOption'

function Aside(props) {

    const menu = [
        {
            title: 'Introdução',
            icon: 'nav-icon fas fa-info-circle',
            submenu: [
                { url: `${urls.home}`, name: 'Como começar', icon: 'far fa-user nav-icon' },
                { url: `${urls.crlve}`, name: 'Outras informações', icon: 'far fa-user nav-icon' },
            ]
        },
        {
            title: 'Padrões',
            icon: 'nav-icon fas fa-ruler-combined',
            submenu: [
                { url: `${urls.home}`, name: 'Accordion', icon: 'far fa-user nav-icon' },
                { url: `${urls.crlve}`, name: 'Lista de componentes', icon: 'far fa-user nav-icon' },
            ]
        },
        {
            title: 'Componentes',
            icon: 'nav-icon fas fa-puzzle-piece',
            submenu: [
                { url: `${urls.home}`, name: 'Accordion', icon: 'far fa-user nav-icon' },
                { url: `${urls.crlve}`, name: 'Input Text', icon: 'far fa-user nav-icon' },
                { url: `${urls.crlve}`, name: 'Input Select', icon: 'far fa-user nav-icon' },
                { url: `${urls.crlve}`, name: 'Button', icon: 'far fa-user nav-icon' },
            ]
        },
    ]

    return (
        <aside className='main-sidebar aside-color bg-white startAsideMenu'>
            <div className='sidebar' >
                {
                    menu.map((item) => (
                        <MenuOption data={item} />
                    ))
                }
            </div >
        </aside >
    )
}

export default Aside