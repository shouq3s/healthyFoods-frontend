import React from 'react'

function Logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
     window.location.href = '/'

}

export default Logout
