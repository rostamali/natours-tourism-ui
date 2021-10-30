import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, loading} = useAuth();
    
    if(loading){
        return <Spinner animation="border" />;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/signIn",
                    state: { from: location }
                }}
                />
            )
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;