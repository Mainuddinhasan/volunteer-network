import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../resources/logos/Group 1329.png';
import googleIcon from '../../resources/logos/google.png';
import './Login.css'




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {

                const { displayName, email } = result.user;

                const signedInUser = { name: displayName, email }
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    
    return (
        <div className="mainDiv">
            <div>
            <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
            </div>
            <div className="login">
                <h5>Login With</h5>
                <button className="LoginBtn" onClick={handleGoogleSignIn}><img style={{ width: '40px', marginRight: '30px' }} src={googleIcon} alt="googleIcon" /> Continue with Google</button>
                <p>Don't have an account? <span style={{ color: '#67A7FD' }}>Create an account</span></p>
            </div>
        </div>
    );
};

export default Login;