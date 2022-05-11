import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app_routes'

function Router() {

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default Router;