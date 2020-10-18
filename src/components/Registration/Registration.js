import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import './Registration.css'
import firebaseConfig from '../Login/firebase.config';


const Registration = () => {
 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
      firebase.auth().signInWithPopup(provider)
          .then(function (result) {
              const { displayName, email } = result.user;
              const signedInUser = { name: displayName, email }
              setLoggedInUser(signedInUser);
              history.replace(from);

          }).catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage)
          });
  }
  // console.log(loggedInUser)

    return (
        <div className="registration-container">
            <div>
            <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
            </div>
        <div className="registration">
             <div className="form-group">
           <label htmlFor="">Full Name</label>
    <input type="name" className="form-control" ></input>
         </div>
             <div className="form-group">
             <label htmlFor="">User Name or email</label>
             <input type="text" className="form-control" />
            </div>
             <div className="form-group">
                 <label htmlFor="">Date</label>
                 <input type="password" className="form-control" />
               </div>
               <div className="form-group">
                <label htmlFor="">Description</label>
                <input type="password" className="form-control" />
           </div>     <div className="form-group">
                <label htmlFor="">Organize books at the library</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-danger">Forgot your password?</label>
              </div>
            <div className="from-group mt-5">
              <button onClick={handleGoogleSignIn} className="btn btn-brand">Google Sign in</button>
             </div>
           
            </div>
        </div>

        // <div className="registration-container">
            
        //   <div className="row align-items-center" style={{ height: "100vh" }}>
        //     <div className="col-md-6 shadow p-5">
        //     <div>
        //     <Link style={{}} className="mb-5" to="/home"><img style={{ width: '20%', marginLeft:"40%"}} src={logo} alt="logo" /></Link>
        //     </div>
        //      <div className="form-group">
        //         <label htmlFor="">Full Name</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">User Name or email</label>
        //         <input type="text" className="form-control" />
        //       </div>
             
        //       <div className="form-group">
        //         <label htmlFor="">Date</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">Description</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">Organize books at the library</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="" className="text-danger">Forgot your password?</label>
        //       </div>
        //       <div className="from-group mt-5">
        //         <button className="btn btn-brand">Google Sign in</button>
        //       </div>
        //     </div>
        //     {/* <div className="col-md-6 d-none d-md-block align-self-end">
        //       <img className="img-fluid" src={LoginBg} alt="" />
        //     </div> */}
        //   </div>
        // </div>
      );
    };

export default Registration;