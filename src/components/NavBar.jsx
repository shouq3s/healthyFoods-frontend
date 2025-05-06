import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <>
     <nav  className="tabs is-centered is-boxed">
     <div className="container">
     <ul> 
     <Link to='/healthyfoods'>HealthyFoods </Link>|
     <Link to='/healthydrinks'>healthy Drink   </Link>|
     <Link to='/healthyfoods/new'> Add HealthyFoods</Link> |
     <Link to='/healthydrinks/new'>new healthy Drink</Link>|
     <Link to='/logout'>Logout </Link>|
     </ul> 
     </div>
     </nav>
     
     </>
  )
} 


export default NavBar