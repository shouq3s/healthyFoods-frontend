import React from 'react'

function FoodsForm(props) {
  return (
    <div>
      <h1>{props.nameverb} your Foods</h1>
      <form onSubmit={props.handleSubmit}>                
                <div>  
                    <label htmlFor='foodName'>Foods Name:</label>
                    <input
                        id='foodName'
                        name='foodName'
                        required
                        value={props.foodName}
                        onChange={event => props.setFoodName(event.target.value)}

                        />
                        
                        </div>
                     <div>  
                    <label htmlFor='calories'>Food calories:</label>
                        <input
                            id='calories'
                            name='calories'
                            required
                            value={props.calories}
                            onChange={event => props.setCalories(event.target.value)}

                            />
                    </div>  
                    <div>  
                    <label htmlFor='Protien'>Protein:</label>
                    <input
                        id='Protien'
                        name='Protien'
                        required
                        value={props.Protien}
                        onChange={event => props.setProtien(event.target.value)}

                        />
                    </div>   
                    <div> 
                    <label htmlFor='Fiber'>Fiber:</label>
                    <input
                        id='Fiber'
                        name='Fiber'
                        required
                        value={props.Fiber}
                        onChange={event => props.setFiber(event.target.value)}

                        /> 
                     <div>   
                    <label htmlFor='Ingredients'>Food Ingredients:</label>
                    <input
                        id='Ingredients'
                        name='Ingredients'
                        required
                        value={props.Ingredients}
                        onChange={event => props.setIngredients(event.target.value)}
                        /> 
                      <div>
                      <label htmlFor='imgUpload'>Image</label>
                    <input 
                        type='file'
                        accept='image/*'
                         onChange={event => props.setImageFile(event.target.files[0])}
                      />
                        </div> 
                </div>     
                <button type='submit'>Submit</button>
                </div>
                </form>
    </div>
  )
}

export default FoodsForm
