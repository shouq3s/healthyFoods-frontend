import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams , useNavigate } from 'react-router'

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
    <div >
        <NavBar/>
        
        <div  className="box">
          <div className="columns">
          <div className="column is-one-third">
        {
                foods.image_url
                ?
                <figure className="image is-square">
                <img src={foods.image_url} 
                    
                /></figure>
                :
                null
            } 
            </div> 
        <div className="column">        
        <h1 className="title"> {foods.foodName} </h1>
      <div className="content">
      <p><strong>calories: </strong>{foods.calories} Cals </p>
      <p><strong>Protein:</strong> {foods.Protien}g</p>
      <p><strong>Fiber:</strong> {foods.Fiber}g </p>
      <p><strong>Ingredients:</strong>  {foods.Ingredients} </p>
      </div> 
      </div>
      </div>
      <div className="box">
      <h3  className="title is-4">Collections:</h3>
       {foods.collection && foods.collection.length > 0 ? (
        <div className="tags">
         {foods.collection.map(collection => (           
         <p className="tag is-primary is-light" key={collection.id}>
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
        <div className="select">
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
            </div>
            </div>
            <button className="button is-primary " onClick={addCollection}>Add Collection</button>            
            </div>
               
      <button className="button is-link is-light"><Link to ={`/healthyfoods/${id}/edit`}>Edit the food</Link> </button>
      {
        deleteConfirm
        ?
        <div >
        <button className="button is-warning " onClick={deletefoods}>are your sure?</button>
        <button className="button is-light" onClick={() => setDeleteConfirm(false)}>Cancel</button>
        </div>
        
        :
        <button  className="button is-danger" onClick={showConfirmDelete} >Delete</button>
    } 
     </div>
    </div>
  )
}

export default FoodsDetail
