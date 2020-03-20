import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout(props) {
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(props.isLoggedIn)

    isLoggedIn && setIsLoggedIn(false)

    return (
        !isLoggedIn && <Redirect to='/login'/>
    )
}

export default Logout