import React, { useState, useEffect } from 'react'
import { auth, provider } from "../Firebase.js"
import { signInWithPopup } from "firebase/auth"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import "./styles.css"
import { useNavigate } from "react-router-dom";

function SignIn({setIsAuth}) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])
  
    
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);

        // localStorage.setItem("email", loginEmail);

        // localStorage.setItem("isAuth", true);
        // window.location.pathname = "/";
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const logout = async () => {
      await signOut(auth);
    };

  let navigate = useNavigate();

  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((resulte) => {
        setIsAuth(true);
        const name = resulte.user.displayName;
        const email = resulte.user.email;
        const profilPic = resulte.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilPic", profilPic);

        localStorage.setItem("isAuth", true);
        
        // navigate("/");
        window.location.pathname = "/";
        
        
    }).catch((error) => {
        console.log(error);
    });
}
  return (
    <div id='SignInMainDiv'>
    <div className="signin">
    <form action="">
        <h1>Sign in</h1>
        <div className='input'>
        <input placeholder="Email..."
        type="email" 
        onChange={(event) => {
            setLoginEmail(event.target.value);
          }} />
        <input placeholder="Password..."
        type="password" name = "password" method="POST"
        onChange={(event) => {
            setLoginPassword(event.target.value);
          }} />
        <button onClick={login}>Sign in </button>
        </div>
        <h6>Not yet register? <span>
        <form action="/signup" class="inline">
            <button class="float-left submit-button" >SignUp</button>
        </form>
        </span></h6>
    </form>
    <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign-In with Google</button>


    <h4> User Logged In: </h4>
        {user ? user.email : "Not Logged In"}

      <button onClick={logout}> Sign Out </button>
    </div>
    </div>
  )
}

export default SignIn