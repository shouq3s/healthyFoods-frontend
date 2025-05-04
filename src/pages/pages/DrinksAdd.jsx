import React from 'react'
import { useState } from 'react'
import DrinkForm from '../../components/components/DrinkForm'
import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar'

import axios from 'axios'
import { useNavigate } from 'react-router'
function DrinksAdd() {
  const navigate = useNavigate()
  const [drinkname, setdrinkname] = useState('')
      const [calories,setCalories] = useState('')
      const [Protien,setProtien]= useState('')
      const [Ingredients,setIngredients] = useState('')
      const [imageFile, setImageFile] = useState(null)
  
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
    console.log('handle sumbit is running')
    try {
  
    const payload = { drinkname,calories,Protien,Ingredients, image_url: cloudinaryImgUrl }
    const response = await authorizedRequest('post', `healthydrinks/`,payload) 
    console.log(response)
    navigate('/healthydrinks')
  }catch(err){
    console.log(err)
  }
}

  return (
    <div>
      <NavBar/>
      <DrinkForm 

      drinkname={drinkname}
      setdrinkname={setdrinkname}
      calories={calories}
      setCalories={setCalories}
      Protien={Protien}
      setProtien={setProtien}
      Ingredients={Ingredients}
      setIngredients={setIngredients}
      setImageFile={setImageFile}
      handleSubmit={handleSubmit}
      
      nameverb='add'
      />
    </div>
    
  )
}

export default  DrinksAdd
