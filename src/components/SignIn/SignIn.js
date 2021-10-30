import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import googleThumbnail from '../../images/search.png';
import './SignIn.css';

const SignIn = () => {

    const {handleGoogleSignIn, setUser, setLoading} = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';

    const googleRedirectSignIn = () =>{
        handleGoogleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(redirectUri);
        }).finally(()=>setLoading(false))
    }


    return (
        <div className="signin-section">
            <div className="container">
                <div className="signin-btn-wrapper">
                    <button className="btn-signin" onClick={googleRedirectSignIn}>
                        <div className="google-thumbnail">
                            <img src={googleThumbnail} alt="Google" />
                        </div>
                        <h4 className="signin-text">Sign in with Google</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;