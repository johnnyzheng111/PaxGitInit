import React from 'react'
import { auth, provider } from "../Firebase.js"
import { signInWithPopup } from "firebase/auth"
import "./styles.css"
import { useNavigate } from "react-router-dom";

function SignIn({setIsAuth}) {
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
    <h1>SignIn</h1>
    <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign-In with Google</button>

    </div>
  )
}

export default SignIn