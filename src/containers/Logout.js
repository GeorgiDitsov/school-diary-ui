import React from 'react'
import AuthenticationService from '../services/AuthenticationService'
import { Redirect } from 'react-router-dom'
import { LOGIN_PATH } from '../utils/url'

const Logout = () => {
    return (
        AuthenticationService.handleLogout() && <Redirect to={LOGIN_PATH}/>
    )
}

export default Logout