import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css';

const PrivateRoute = ({children, ...rest}) => {

    const {user, loading} = useAuth();
    
    if(loading){
        return <div id="spinner-section">
        <div className="container">
            <div className="spinner-inner">
                <Spinner animation="border" variant="warning" />
            </div>
        </div>
    </div>;
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