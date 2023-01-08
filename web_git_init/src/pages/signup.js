import { useState, useEffect } from 'react'
import { auth } from "../Firebase.js"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import "./styles.css"

function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])
  
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        )
      //   .then((userCredential)=>{
      //   userCredential.user.sendEmailVerification();
      //   auth.signOut();
      //   alert("Email sent");
      // }).catch(alert);
      //   console.log(user)
        ;
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div id='SignInMainDiv'>
        <h3> Register User </h3>
        <input
          placeholder="First Name..."
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          placeholder="Last Name..."
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          placeholder="Email..."
          input type="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          input type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>
  )
}

export default Signup