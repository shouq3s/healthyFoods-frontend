import React from 'react'

function DrinkForm(props) {
  return (
    <div className="container">
       <div className="box">
      <h1 className="title is-4">{props.nameverb} your drinks</h1>
      <form onSubmit={props.handleSubmit}>                
                <div className="field">  
                    <label className="label" htmlFor='drinkname'>Drink Name:</label>
                    <input
                        className="input"
                        id='drinkname'
                        name='drinkname'
                        required
                        value={props.drinkname}
                        onChange={event => props.setdrinkname(event.target.value)}

                        />
                        
                        </div>
                     <div className="field">  
                    <label className="label" htmlFor='calories'>drink calories:</label>
                        <input
                            className="input"
                            id='calories'
                            name='calories'
                            required
                            value={props.calories}
                            onChange={event => props.setCalories(event.target.value)}

                            />
                    </div>  
                    <div  className="field">  
                    <label className="label" htmlFor='Protien'>Protein:</label>
                    <input
                        className="input"
                        id='Protien'
                        name='Protien'
                        required
                        value={props.Protien}
                        onChange={event => props.setProtien(event.target.value)}

                        />
                    </div>   
                    <div> 
                     <div  className="field">   
                    <label className="label" htmlFor='Ingredients'>Food Ingredients:</label>
                    <input
                        className="textarea"
                        id='Ingredients'
                        name='Ingredients'
                        required
                        value={props.Ingredients}
                        onChange={event => props.setIngredients(event.target.value)}
                        /> 
                      <div  className="field">
                      <label className="label" htmlFor='imgUpload'>Image</label>
                    <input 
                        type='file'
                        accept='image/*'
                         onChange={event => props.setImageFile(event.target.files[0])}
                      />
                        </div> 
                </div>     
                <button className="button is-primary"  type='submit'>Submit</button>
                </div>
            
                </form>    </div>
    </div>
  )
}

export default DrinkForm
