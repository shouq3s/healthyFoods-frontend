import { useState } from 'react'
import { useNavigate } from 'react-router'
import { setTokens } from '../lib/api'
import axios from 'axios'
import { Link } from 'react-router'
function Login() {

  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}token/`, formData)
      setTokens({
        access: response.data.access,
        refresh: response.data.refresh
      })
      navigate('/healthyfoods')
    }catch (err) {
      console.log(err)
      setError('Invalid username or password')
    }
  }
  
  return (
    <div className="container">
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="box">
      <h1 className="title has-text-centered">Login</h1>
      <form onSubmit={handleSubmit}>
      <div className="field">
      <label className="label">Username</label>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        </div>
        
        <div className="field">
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
            </div>
          <div className="field">
        <button   className="button is-primary is-fullwidth" type="submit">Login</button>
        {error && <p>{error}</p>}
        </div>
      </form>
      <div className="has-text-centered">Don't have an account ? 
            <Link to="/signup" className="is-link">
               Sign up
            </Link> </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Login