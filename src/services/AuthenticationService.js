import { API_URL, LOGIN_PATH } from '../utils/url'
import httpRequest from '../utils/httpRequest'
import { setTokenCookie } from '../utils/cookie'
import cookie from 'react-cookies'

const API_LOGIN_URL = API_URL + LOGIN_PATH

class AuthenticationService {
    
    async attemptLogin(body) {
        return await httpRequest.post(API_LOGIN_URL, body)
            .then(response => {
                if(response.ok) {
                    response.json().then(data => {
                        setTokenCookie(data)
                        return true
                    })
                } else {
                    response.text().then(error => {
                        throw new Error(error)
                    })
                }
            })
    }

    async attemptLogout() {
        cookie.remove('token')
        return true
    }

}

export default new AuthenticationService()