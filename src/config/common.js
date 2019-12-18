import React from 'react';


import { isAuthenticated } from '../utils/Session'

import { Route, Redirect } from 'react-router-dom'


export function CustomRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            !!isAuthenticated()
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    )
}
