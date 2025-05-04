import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate()
    
    function navigateReturn() {
        navigate('/healthyfoods')
      }
  return (
    <div>
      <h1>Not Found Page</h1>
      <button onClick={navigateReturn}>Return</button>
    </div>
      
  )
  
}

export default NotFound
