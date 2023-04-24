import React from 'react';
import "../styles/card.css";
import { useSelector } from 'react-redux';



export default function Card() {
  const userDetails = useSelector(state => state.UserDetails.userDetails)
  const userContact = useSelector(state => state.UserDetails.userContact)
  const userCreds = useSelector(state => state.UserDetails.userCreds)
  return (
    <div className='details-container'>

      <h3>User Details</h3>
      <p>First Name: {userDetails && userDetails.fname || ""}</p>
      <p>Last Name: {userDetails && userDetails.lname || ""}</p>
      <p>Gender: {userDetails && userDetails.gender || ""}</p>
      <h3>User Contact</h3>
      <p>Phone: {userContact && userContact.phone || ""}</p>
      <p>Address: {userContact && userContact.address || ""}</p>
      <h3>User Creds</h3>
      <p>Email: {userCreds && userCreds.email || ""}</p>
      <p>Password: {userCreds && userCreds.password || ""}</p>

    </div>
  )
}