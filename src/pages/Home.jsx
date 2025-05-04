import React from 'react'
import { Link } from 'react-router'
Link
function Home() {
  return (
    <>
     <Link to='/signup'>Signup</Link>|
     <Link to='/login'>Login</Link>
    
      <h1>Welcome to my Healthy Foods App</h1>
      <h2> If you want to make your life healthier you are in the right place</h2>
      
    </>
  )
}

export default Home
