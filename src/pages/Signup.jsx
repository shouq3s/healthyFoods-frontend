import { useState } from 'react'
import axios from 'axios'
import { setTokens } from '../lib/api'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    async function handleSubmit(event){       
        event.preventDefault()
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/signup/',
                {username, email, password}
            )
            console.log(response.data)
            setTokens(response.data)
            navigate('/healthyfoods')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="hero is-fullheight ">
        <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
            <h1 className="title has-text-centered ">Sign Up </h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                <label className="label">Username</label>
                    <input
                        className="input"
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </div> 
                <div className="field" >
                <label className="label">Email</label>
                    <input
                        className="input"
                        type='email'
                        placeholder='email'
                        name='email'
                        required
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <div  className="field">
                <label className="label">Password</label>
                    <input
                        className="input"
                        type='password'
                        placeholder='password'
                        name='password'
                        required
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
                <div className="field">
                <button className="button is-primary is-fullwidth" type='submit'>Sign Up!</button>
               
                </div>
            </form>
            <div className="has-text-centered ">Already have account? 
            <Link to='/login' className="is-link">Login</Link>
            </div>
        </div>
      </div>
    </div>
</div>
</section>
    )
}

export default Signup