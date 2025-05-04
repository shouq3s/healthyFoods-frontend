import React from 'react'
import { useState } from 'react'
import FoodsForm from '../components/FoodsForm'
import { authorizedRequest } from '../lib/api'
import NavBar from '../components/NavBar'

import axios from 'axios'
import { useNavigate } from 'react-router'
function FoodsAdd() {
  const navigate = useNavigate()
  // const [foodData, setFoodData] = useState({
  //   foodName:'',
  //   calories:'',
  //   Protien:'',
  //   Fiber:'',
  //   Ingredients:''
  // })
  const [foodName, setFoodName] = useState('')
      const [calories,setCalories] = useState('')
      const [Protien,setProtien]= useState('')
      const [Fiber,setFiber]= useState('')
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
  
    const payload = { foodName,calories,Protien,Fiber,Ingredients, image_url: cloudinaryImgUrl }
    const response = await authorizedRequest('post', `healthyfoods/`,payload) 
    console.log(response)
    navigate('/healthyfoods')
  }catch(err){
    console.log(err)
  }
}

  return (
    <div>
      <NavBar/>
      <FoodsForm 
      // foodData={foodData}
     // setFoodData={setFoodData}
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
      
      nameverb='add'
      />
    </div>
    
  )
}

export default FoodsAdd
