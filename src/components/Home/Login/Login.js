import React, { useContext } from 'react';
import logo from '../../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName,email};
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
  });

    }
    return (
        <div className="text-center my-5 py-5">
            <div className="my-5 py-5">
                <div>
                    <a href="/">
                        <img src={logo} className="w-25 mb-2" alt=""/>
                    </a>
                </div>
                <div className="my-4">
                    <h5>Login With</h5>
                    <button className="btn btn-outline-info" onClick={handleGoogleSignIn}><FontAwesomeIcon className="icon" icon={faGoogle} /> <span>Continue With Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;