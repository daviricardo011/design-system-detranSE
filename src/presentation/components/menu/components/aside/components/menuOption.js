import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function MenuOption({ data }) {
    const [isOpen, setIsOpen] = useState(false)

    const style = isOpen ? 'menu-close' : 'menu-open'
    const displayStyle = isOpen ? 'showOptions' : 'hideOptions'

    return (
        <>
            <nav className='mt-3 menu-options'>
                <ul className='nav nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
                    <li className={`nav-item ${style}`}>
                        <span href='#' className='nav-link menu-Titleoptions' onClick={() => setIsOpen(!isOpen)}>
                            <i className={data.icon} />
                            <p>{data.title}<i className='ml-1 fas fa-angle-left right' /></p>
                        </span>
                        <ul className={`nav ${displayStyle}`}>
                            {
                                data.submenu.map((submenu) => (
                                    <li>
                                        <Link to={submenu.url} className='nav-link submenu-content '>
                                            <i className={submenu.icon + ' optionsMenu'} />
                                            <p className={'optionsMenu'}>{submenu.name}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MenuOption
