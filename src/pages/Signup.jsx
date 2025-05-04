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
        <div>
            <h1>Sign Up </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </div> 
                <div>
                    <input
                        type='email'
                        placeholder='email'
                        name='email'
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
               
                <button type='submit'>Sign Up!</button>
            </form>
            <Link to='/login'>Already have account? Login</Link>
        </div>
    )
}

export default Signup