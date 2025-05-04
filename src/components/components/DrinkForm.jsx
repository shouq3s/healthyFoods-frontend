import React from 'react'

function DrinkForm(props) {
  return (
    <div>
      <h1>{props.nameverb} your drinks</h1>
      <form onSubmit={props.handleSubmit}>                
                <div>  
                    <label htmlFor='drinkname'>Drink Name:</label>
                    <input
                        id='drinkname'
                        name='drinkname'
                        required
                        value={props.drinkname}
                        onChange={event => props.setdrinkname(event.target.value)}

                        />
                        
                        </div>
                     <div>  
                    <label htmlFor='calories'>drink calories:</label>
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

export default DrinkForm
