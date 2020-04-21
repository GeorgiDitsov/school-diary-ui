import { API_URL, LOGIN_PATH } from '../utils/url'
import HttpRequest from '../utils/httpRequest'
import { setTokenCookie } from '../utils/cookie'
import cookie from 'react-cookies'
import { TOKEN_COOKIE_NAME } from '../utils/constants'

const API_LOGIN_URL = API_URL + LOGIN_PATH

class AuthenticationService {
    
    handleLogin(body) {
        HttpRequest.post(API_LOGIN_URL, body)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(token => {
                            setTokenCookie(token)
                        })
                } else {
                    response.text()
                        .then(error => {
                            throw new Error(error)
                        })
                }
            }).catch(error => {
                alert(error)
            })
    }

    handleLogout() {
        cookie.remove(TOKEN_COOKIE_NAME)
        return true
    }

}

export default new AuthenticationService()