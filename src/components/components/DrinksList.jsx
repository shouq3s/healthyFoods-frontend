import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from '../../lib/api'
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
    <div className="container" >
      <h1 className="title is-1 has-text-centered">all drink :</h1>
      <div className="columns is-multiline ">

      {drink.map(drinks =>{
        return(
         
          <div className="column is-one-third" key={drinks.id}>
            <div className="box has-border" >
             <Link to={`/healthydrinks/${drinks.id}`}> 
             {
                drinks.image_url
                ?
                <figure className="image is-5by4">
                <img src={drinks.image_url} 
                className='customImage'
                />
                </figure>
                :
                null
            } <div className="content">
              <h3 className="title is-4">{drinks.drinkname}</h3>
              <p className="title is-6">{drinks.calories} calories</p>
                    <div className="tags">
                      <span className="tag is-info is-light">Protein: {drinks.Protien}g</span>
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

export default DrinksList
