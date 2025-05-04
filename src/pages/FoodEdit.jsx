import React, { useState,useEffect } from 'react'
import FoodsForm from '../components/FoodsForm'
import axios from 'axios'
import NavBar from '../components/NavBar'
import { useParams,useNavigate } from 'react-router'
import { authorizedRequest } from '../lib/api'
function FoodEdit() {
    const { id }= useParams()
    const navigate=useNavigate()
    const [imageFile, setImageFile] = useState(null)
    const [foodName, setFoodName] = useState('')
    const [calories,setCalories] = useState('')
    const [Protien,setProtien]= useState('')
    const [Fiber,setFiber]= useState('')
    const [Ingredients,setIngredients] = useState('')
  
      async function getCurrentFoods() {
        const response = await authorizedRequest('get', `healthyfoods/${id}/`)
        
            setFoodName(response.data.foodName)
            setCalories(response.data.calories )
            setProtien(response.data.Protien)
            setFiber(response.data.Fiber)
            setIngredients(response.data.Ingredients)
          
           setImageFile(response.data.imageFile)
      }
      useEffect(()=>{
        getCurrentFoods()
      }, [])
      
      async function handleSubmit(event) {
        event.preventDefault()
        let cloudinaryImgUrl = ''
        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
        try{
          const cloudinaryResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
             formData 
          )
          cloudinaryImgUrl=cloudinaryResponse.data.secure_url
    
        }catch(err){
          console.log(err)
        }
        try {
        const response = await  authorizedRequest('patch', `healthyfoods/${id}/`,
          {foodName,calories,Protien,Fiber,Ingredients,image_url: cloudinaryImgUrl}
      )
          console.log(response)
          navigate('/healthyfoods')
       }catch (err){
        console.log(err)
      } 
    }
  return (
    <div>
      <NavBar/>
      
      <FoodsForm 
      foodName={foodName}
      setFoodName={setFoodName}
      calories={calories}
      setCalories={setCalories}
      Protien={Protien}
      setProtien={setProtien}
      Fiber={Fiber}
      setFiber={setFiber}
      Ingredients={Ingredients}
      setIngredients={setIngredients}
      setImageFile={setImageFile}
      handleSubmit={handleSubmit}
      nameverb='Edit'
      />
    </div>
  )
}

export default FoodEdit
