import React from 'react'

function FoodsForm(props) {
  return (
    <div className="container">
      <div className="box">
      <h1 className="title is-4">{props.nameverb} your Foods</h1>
      <form onSubmit={props.handleSubmit}> 
                     
                <div className="field">  
                    <label className="label" htmlFor='foodName'>Foods Name:</label>
                    <input
                        className="input"
                        id='foodName'
                        name='foodName'
                        required
                        value={props.foodName}
                        onChange={event => props.setFoodName(event.target.value)}

                        />
                        
                        </div>
                     <div className="field">  
                    <label className="label" htmlFor='calories'>Food calories:</label>
                        <input
                            className="input"
                            id='calories'
                            name='calories'
                            required
                            value={props.calories}
                            onChange={event => props.setCalories(event.target.value)}

                            />
                    </div>  
                    <div className="field">  
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
                    <div className="field"> 
                    <label className="label" htmlFor='Fiber'>Fiber:</label>
                    <input
                        className="input"
                        id='Fiber'
                        name='Fiber'
                        required
                        value={props.Fiber}
                        onChange={event => props.setFiber(event.target.value)}

                        /> 
                     <div className="field">   
                    <label className="label" htmlFor='Ingredients'>Food Ingredients:</label>
                    <input
                        className="textarea"
                        id='Ingredients'
                        name='Ingredients'
                        required
                        value={props.Ingredients}
                        onChange={event => props.setIngredients(event.target.value)}
                        /> 
                      <div className="field">
                      <label className="label" htmlFor='imgUpload'>Image</label>
                    <input 
                        
                        type='file'
                        accept='image/*'
                         onChange={event => props.setImageFile(event.target.files[0])}
                      />
                        </div> 
                </div>     
                <button className="button is-primary" type='submit'>Submit</button>
                </div>
                
                </form></div>
    </div>
  )
}

export default FoodsForm
