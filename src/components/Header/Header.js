import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, handleSignOut} = useAuth();


    return (
        <>
            <Navbar expand="lg" className="navbar-bg">
                <Container>
                    <Navbar.Brand>
                        <NavLink className="navbar-logo" to="/">Natours</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><i class="fas fa-bars"></i></Navbar.Toggle>
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
                            to="/myorder">My Bookings</NavLink>
                        }    
                        {
                            user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/manageBookings">Manage All Bookings</NavLink>
                        }
                        {
                            user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/addService">Add New Package</NavLink>
                        }
                        {
                            !user.email &&
                            <NavLink 
                            className="navbar-link"
                            activeStyle={{
                                color : "#EA721D"
                            }}
                            to="/signIn">Sign in</NavLink>
                        }
                        {/* {
                            user.photoURL && 
                            <span className="user-img"><img src={user.photoURL} alt={user.displayName} /></span>
                        } */}
                        {
                            user.email && 
                            <button className="navbar-link" onClick={handleSignOut}>Sign Out</button>
                        }
                        {
                            user.displayName && 
                            <span className="navbar-link user-name">{user.displayName}</span>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;