import React from 'react'
import AuthenticationService from '../services/AuthenticationService'
import { Redirect } from 'react-router-dom'
import { LOGIN_PATH } from '../utils/url'

const Logout = () => {
    if(AuthenticationService.attemptLogout()) {
        return (
            <Redirect to={LOGIN_PATH}/>
        )
    }
}

export default Logout