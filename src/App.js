import React from 'react';
import { CustomRoute } from './config/common'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login/index'
import Index from './layout'
import './assets/css/App.css'

import { StoreProvider } from "./store/index";



function App() {
    return (
        <StoreProvider>
            <Switch>
                <Route path='/login' component={Login} />
                <CustomRoute path='/' component={Index} />
            </Switch>
        </StoreProvider>
    )
}


export default App;
