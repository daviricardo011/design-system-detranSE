import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    Home, Crlve
} from '../../presentation/screens'
import { Menu } from '../../presentation/components'
import { urls } from './urls'


const AppRoutes = () => {
    const user = {
        name: 'Externo',
        listaPermissao: '',
        tipoAcesso: ''
    }
    return (
        <Menu userData={user}>
            <Routes>
                <Route path={`${urls.home}`} element={<Home />} />
                <Route path={`${urls.crlve}`} element={<Crlve />} />
            </Routes>
        </Menu>
    )
}

export default AppRoutes