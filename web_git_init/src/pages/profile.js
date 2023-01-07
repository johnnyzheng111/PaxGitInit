import React from 'react';
import "./styles.css"

const Profile = () => {
return (
	<div id='MainDiv'>
	<h1>Profile</h1>
	<h1>{localStorage.getItem("name")}</h1>
	<h1>{localStorage.getItem("email")}</h1>
	</div>
);
};

export default Profile;