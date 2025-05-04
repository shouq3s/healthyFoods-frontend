import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from '../lib/api'
 function DrinksList() {
  const[drink,setdrink]=useState([])

    async function getAllDrinks(){
       const reponse = await authorizedRequest('get', `healthydrinks/`) 
       console.log(reponse)
       setdrink(reponse.data)
    }
    useEffect(()=>{
        getAllDrinks()
    },[])
  
  return (
    <div>
      <h1>all drink :</h1>
      <ul className="ul-list" >

      {drink.map(drinks =>{
        return(
         
          <div className="custom-list" key={drinks.id}>
             <Link to={`/healthydrinks/${drinks.id}`}> 
             {
                drinks.image_url
                ?
                <img src={drinks.image_url} 
                className='customImage'
                />
                :
                null
            }
              <p >{drinks.drinkname} with {drinks.calories}(cals)</p>
              
              </Link>
          </div>
         
        )
      })} 
      </ul>
    </div>
  )
}

export default DrinksList
