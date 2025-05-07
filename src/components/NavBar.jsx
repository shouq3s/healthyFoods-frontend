import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <>
     <nav  className="navbar is-dark">
     <div className="container">
     <div  className="navbar-start">
     <Link to='/healthyfoods' className="navbar-item">HealthyFoods </Link>
     <Link to='/healthydrinks' className="navbar-item">healthy Drink   </Link>
     <Link to='/healthyfoods/new' className="navbar-item"> Add HealthyFoods</Link> 
     <Link to='/healthydrinks/new'className="navbar-item">new healthy Drink</Link>
     <Link to='/logout'className="navbar-item">Logout </Link>
     </div >
     </div>
     </nav>
     </>
  )
} 


export default NavBar