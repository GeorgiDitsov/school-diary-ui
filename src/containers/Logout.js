import React from 'react'
import { useHistory } from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService'

const Logout = () => {
    const history = useHistory()
    AuthenticationService.attemptLogout() && history.push()
    return (
        <React.Fragment/>
    )
}

export default Logout