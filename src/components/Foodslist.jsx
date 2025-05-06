import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from '../lib/api'
 function Foodslist() {
  const[foods,setFoods]=useState([])

    async function getAllFoods(){
       const reponse = await authorizedRequest('get', `healthyfoods/`) 
       console.log(reponse)
       setFoods(reponse.data)
    }
    useEffect(()=>{
        getAllFoods()
    },[])
  
  return (
    <div  >
      <h1 className="title">all Foods :</h1>
      <ul className="ul-list" >

      {foods.map(food =>{
        return(
         
          <div className="custom-list" key={food.id}>
             <Link to={`/healthyfoods/${food.id}`}> 
             {
                food.image_url
                ?
                <img src={food.image_url} 
                className='customImage'
                />
                :
                null
            }
              <p >{food.foodName} with {food.calories}(cals)</p>
              
              </Link>
          </div>
         
        )
      })} 
      </ul>
    </div>
  )
}

export default Foodslist
