import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import logo from "../../resources/logo.jpg"
import './index.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "../../Firebase.js";

// import signInWithGoogle from "../../pages/signin"

function NavBarIndex() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () =>{
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/signin";
    })
  }

  return (
	<Router>
    <div className="NavBarIndex">
      <Navbar id='NavBarMain' variant="dark" 
	  expand="md" sticky="top" collapseOnSelect>
        <Navbar.Brand id='NavBarLogoSign' href='/'>
          {/* <img src={logo} width="50px" height="50px" />{' '} */}
          Pax: The Project
        </Navbar.Brand>

        <Navbar.Toggle id='NavToggle'/>
        <Navbar.Collapse id='NavColor'>
          <Nav> 
            <NavDropdown title="Communication">
              <NavDropdown.Item href="/communication/blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/communication/connectwithus">Connect With Us</NavDropdown.Item>
            </NavDropdown>
			<Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/mentalhealthinfo">Mental Health Info</Nav.Link>
            {isAuth && <Nav.Link href="/profile">Profile</Nav.Link>}
            {/* {window.location.pathname === "/communication/blogs" && <Nav.Link href="/createPost">Create Post</Nav.Link>} */}
            
          </Nav>
		  <Nav id='NavBarSignIn' className="ms-auto">
      {!isAuth ? (<Nav.Link href="/signin" id='NavSignIn'>Sign IN</Nav.Link>)
      : (<Nav.Link onClick={signUserOut} id='NavSignIn'>Sign OUT</Nav.Link>)}
		  	{/* <Nav.Link onClick={signInWithGoogle} id='NavSignIn'>Sign In</Nav.Link> */}
		  </Nav>
        </Navbar.Collapse>

      </Navbar>
		
    </div>
	
	
	</Router>


  );
}

export default NavBarIndex