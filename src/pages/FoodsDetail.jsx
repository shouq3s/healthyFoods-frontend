import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams , useNavigate } from 'react-router'
import axios from 'axios'

import { Link } from 'react-router'
import { authorizedRequest, setTokens } from '../lib/api'
function FoodsDetail() {
    const { id }= useParams() //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the routes.
    const navigate = useNavigate()
    const [foods,setFoods] = useState(null)
    const [collections, setCollections] = useState([])
    const [selectedCollection, setSelectedCollection] = useState('')
    const [deleteConfirm,setDeleteConfirm] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    async function getSpecifyFood() {
        // get the foods from the API
        // put the foods in state
          try{
            const response = await authorizedRequest('get', `healthyfoods/${id}/`) //method ,url
            setFoods(response.data)
            setTokens(response.data)
        }catch (err) {
            console.log(err)
            if (err.status === 404) {
                 navigate('/not-found')
            }else{
            setErrorMsg('Something went Wrong :-(')
        }}
    }
    useEffect(() => {
        getSpecifyFood()
    }, [])
    async function getCollections() {
      try {
          const response = await authorizedRequest('get', 'collections/')
          setCollections(response.data)
      } catch (err) {
          console.log(err)
      }
  }
  async function addCollection() {
    if (!selectedCollection) return
    
    try {
        const response = await authorizedRequest('post', `healthyfoods/${id}/add-collection/${selectedCollection}/`)
        if (response.status === 200) {
            await getSpecifyFood()
        }
    } catch (err) {
        console.log(err)
        setErrorMsg('error to add collection')
    }
}  useEffect(() => {
  getCollections()
}, [])
async function removeCollection(collectionId) {
    try {
        const response = await authorizedRequest('post', `healthyfoods/${id}/remove-collection/${collectionId}/`)
        if (response.status === 200) {
            await getSpecifyFood()
            
        }
    } catch (err) {
        console.log(err)
        setErrorMsg('Failed to remove collection')
    }
}
    async function deletefoods() {
      try{
        const response = await authorizedRequest('delete', `healthyfoods/${id}/`) 
        if (response.status===204){ 
        navigate('/healthyfoods')
        }
      }catch(err){
         console.log(err)
      }     
    }
    function showConfirmDelete(){
      setDeleteConfirm(true)
    }
    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!foods) return <h1>Loading your foods...</h1>
    
  return (
    <div>
        <NavBar/>
        <div className="custom-list">
        {
                foods.image_url
                ?
                <img src={foods.image_url} 
                className='customImage'        
                />
                :
                null
            }
      <h1> {foods.foodName} </h1>
      <h4>calories: {foods.calories} Cals </h4>
      <h4>Protein: {foods.Protien}g</h4>
      <h4>Fiber: {foods.Fiber}g </h4>
      <h4>Ingredients:  {foods.Ingredients} </h4>
      <div>
                    <h3>Collections:</h3>
                    {foods.collection && foods.collection.length > 0 ? (
                        <div>
                            {foods.collection.map(collection => (           
                                <p key={collection.id}>
                                    {collection.name}
                                    <button 
                                        className="delete is-small"
                                        onClick={() => removeCollection(collection.id)}
                                        />
                                        </p>
                            ))}
                        </div>
                    ) : (
                        <p>No collections assigned</p>
                    )}
                    
                    <div>
                        <select 
                            value={selectedCollection} 
                            onChange={(event) => setSelectedCollection(event.target.value)}
                        >
                            <option value="">Select a collection</option>
                            {collections.map(collection => (
                                <option key={collection.id} value={collection.id}>
                                    {collection.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={addCollection}>Add Collection</button>
                    </div>
                </div>
            </div>
  
      <button ><Link to ={`/healthyfoods/${id}/edit`}>Edit the food</Link> </button>
      {
        deleteConfirm
        ?
        <button onClick={deletefoods}>are your sure?</button>
        :
        <button onClick={showConfirmDelete} >Delete</button>
    } 
    
    </div>
  )
}

export default FoodsDetail
