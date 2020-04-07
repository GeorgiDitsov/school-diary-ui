import { API_URL, LOGIN_PATH } from '../utils/url'
import httpRequest from '../utils/httpRequest'
import { setTokenCookie } from '../utils/cookie'
import cookie from 'react-cookies'
import { TOKEN_COOKIE_NAME } from '../utils/constants'

const API_LOGIN_URL = API_URL + LOGIN_PATH

class AuthenticationService {
    
    attemptLogin(body) {
        httpRequest.post(API_LOGIN_URL, body)
            .then(response => {
                if(response.ok) {
                    response.json()
                        .then(data => {
                            setTokenCookie(data)
                        })
                } else {
                    response.text()
                        .then(error => {
                             
                        })
                }
            })
    }

    attemptLogout() {
        cookie.remove(TOKEN_COOKIE_NAME)
        return true
    }

}

export default new AuthenticationService()