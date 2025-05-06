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
    <div className="container" >
      <h1 className="title is-1 has-text-centered" >all Foods :</h1>
      <div className="columns is-multiline ">
      {foods.map(food =>{
        return(
         
          <div className="column is-one-third" key={food.id}>
            <div className="box has-border" >
             <Link to={`/healthyfoods/${food.id}`}> 
             {
                food.image_url
                ?
                <figure className="image is-5by4">
                <img src={food.image_url} 
                className='customImage'
                />
                </figure>
                :
                null
            }
            <div className="content">
              <h3 className="title is-4">{food.foodName}</h3>
              <p className="title is-6">{food.calories} calories</p>
                    <div className="tags">
                      <span className="tag is-info is-light">Protein: {food.Protien}g</span>
                      <span className="tag is-info is-light">Fiber: {food.Fiber}g</span>
             </div> 
             </div> 
              </Link>
          </div>
         </div>
        )
      })} 
      </div>
      </div>
  )
}

export default Foodslist
