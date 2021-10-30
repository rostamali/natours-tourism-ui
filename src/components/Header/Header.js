import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, handleSignOut} = useAuth();


    return (
        <>
            <Navbar expand="md" className="navbar-bg">
                <Container>
                    <Navbar.Brand>
                        <NavLink className="navbar-logo" to="/">Natours</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/home">Home</NavLink>
                        {
                            user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/myorder">My Orders</NavLink>
                        }    
                        {
                            user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/totalOrders">Manage All Orders</NavLink>
                        }
                        <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/addService">Add New Package</NavLink>
                        {
                            !user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/signIn">Sign in</NavLink>
                        }
                        {
                            user.photoURL && 
                            <span className="user-img"><img src={user.photoURL} alt={user.displayName} /></span>
                        }
                        {
                            user.email && 
                            <button className="navbar-link" onClick={handleSignOut}>Sign Out</button>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;