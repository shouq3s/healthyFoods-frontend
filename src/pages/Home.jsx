import React from 'react'
import { Link } from 'react-router'
Link
function Home() {
  return (
    // https://bulma.io/documentation/layout/hero/
    <section className="hero is-fullheight ">
       <div>
       <div className="buttons is-centered ">
     <Link to='/signup'  className="button is-medium">Signup</Link>|
     <Link to='/login' className="button is-light is-medium ">Login</Link>
     </div>
      <h1 className="title is-1 ">Welcome to my Healthy Foods App</h1>
      <h2  className="title is-4"> If you want to make your life healthier you are in the right place</h2>
      </div>
      </section>
   
  )
}

export default Home
