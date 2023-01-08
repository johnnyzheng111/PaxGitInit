import React, { useState, useEffect } from 'react'
import { auth, provider, db } from "../Firebase.js"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import "./styles.css"

function signup() {
    const [email, setRegisterEmail] = useState('')
    const [password, setRegisterPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
  
    registerUser = async (email,password, firstName, lastName) => {
        await db.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
          db.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://hackathongitinit.firebaseapp.com',
           })
          .then(() => {
                alert("Email sent")
            }).catch((error) => {
                alert(error)
            })
            .then(() => {
              db.firestore().collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                  firstName,
                  lastName,
                  email,
              })
            })
            .catch((error) => {
              alert(error)
          })
        })
        .catch((error) => {
            alert(error)
        })
    }
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
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <button onClick={registerUser(email,password, firstName, lastName)}> Create User</button>
      </div>
  )
}

export default signup