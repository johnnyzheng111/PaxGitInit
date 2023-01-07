import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import NavBarIndex from './components/Navbar';
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
import About from './pages/about';
import Home from './pages';
import ConnectWithUs from './pages/communication/connectwithus';
import Blog from './pages/communication/blog';
import Profile from './pages/profile';
import SignIn from './pages/signin';
import Protected from './Protected';
import MentalHealthInfo from './pages/mentalHealthInfo';
import Support from './pages/support';



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    
    <div className='App'>
    <NavBarIndex/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/communication/connectwithus' element={<ConnectWithUs/>} />
          <Route path='/mentalHealthInfo' element={<MentalHealthInfo/>} />
          <Route path='/communication/blog' element={<Blog/>} />
          <Route path='/profile' element={<Protected isAuth={isAuth}><Profile/></Protected>} />
          <Route path='/signin' element={<SignIn setIsAuth={setIsAuth}/>} />
          <Route path='/support' element={<Support/>} />
          {/* <Route path="/createPost" element={<Protected isAuth={isAuth}><CreatePost/></Protected>} /> */}
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
