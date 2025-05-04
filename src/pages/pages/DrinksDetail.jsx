
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
        <div className="custom-list">
        {
                drinks.image_url
                ?
                <img src={drinks.image_url} 
                className='customImage'        
                />
                :
                null
            }
      <h1> {drinks.drinkname} </h1>
      <h4>calories: {drinks.calories} Cals </h4>
      <h4>Protein: {drinks.Protien}g</h4>
      <h4>Ingredients:  {drinks.Ingredients} </h4>
      <button ><Link to ={`/healthydrinks/${id}/edit`}>Edit the food</Link> </button>
      {
        deleteConfirm
        ?
        <button onClick={deletedrinks}>are your sure?</button>
        :
        <button onClick={showConfirmDelete} >Delete</button>
    } 
    </div>
    </div>
  )
}



export default DrinksDetail
