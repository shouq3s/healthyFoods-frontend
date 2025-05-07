
import React, { useState,useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { useParams , useNavigate } from 'react-router'
import { Link } from 'react-router'
import { authorizedRequest,setTokens } from '../../lib/api'
import axios from 'axios'
function DrinksDetail() {
    const { id }= useParams() 
    const navigate = useNavigate()
    const [drinks,setDrinks] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm,setDeleteConfirm] = useState(false)
     

    async function getSpecifyDrink() {
          try{
            const response = await authorizedRequest('get', `healthydrinks/${id}/`) //method ,url
            setDrinks(response.data)
            setTokens(response.data)
        }catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            }else{
            setErrorMsg('Something went Wrong ')
        }}
    }
    useEffect(() => {
        getSpecifyDrink()
    }, [])
    async function deletedrinks() {
      try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/healthydrinks/${id}/`)
        if (response.status===204){ 
        navigate('/healthydrinks')
        }
      }catch(err){
         console.log(err)
      }     
    }
    function showConfirmDelete(){
      setDeleteConfirm(true)
    }
    
    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!drinks) return <h1>Loading your drinks...</h1>
    
  return (
    <div>
        <NavBar/>
        <div  className="box">
          <div className="columns">
          <div className="column is-one-third">
        {
                drinks.image_url
                ?
                <figure className="image is-square">
                <img src={drinks.image_url} 
                className='customImage'        
                /></figure>
                :
                null
            }
            </div>
          <div className="column">
      <h1 className="title"> {drinks.drinkname} </h1>
      <div className="content">
      <p> <strong>calories: </strong>{drinks.calories} Cals </p>
      <p><strong> Protein: </strong>{drinks.Protien}g</p>
      <p> <strong>Ingredients: </strong>I {drinks.Ingredients} </p>
      </div></div></div>
      <button className="button is-link is-light"><Link to ={`/healthydrinks/${id}/edit`}>Edit the food</Link> </button>
      
      {
        deleteConfirm
        ?
        <div>
        <button className="button is-warning" onClick={deletedrinks}>are your sure?</button>
        <button className="button is-light" onClick={() => setDeleteConfirm(false)}>Cancel</button>
        </div>
        :
        <button className="button is-danger" onClick={showConfirmDelete} >Delete</button>
    } 
    </div>
    </div>
  )
}



export default DrinksDetail
