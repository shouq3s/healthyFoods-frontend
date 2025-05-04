import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <>

     <nav>
     <ul>
      <Link to='/'>Home </Link>|
     <Link to='/healthyfoods'>HealthyFoods </Link>|
     <Link to='/healthydrinks'>healthy Drink   </Link>|
     <Link to='/healthyfoods/new'> Add HealthyFoods</Link> |
     <Link to='/healthydrinks/new'>new healthy Drink</Link>|
     <Link to='/logout'>Logout </Link>|
     </ul> 
     </nav>
     
     </>
  )
} 


export default NavBar