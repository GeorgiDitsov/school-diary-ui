import { TOKEN_COOKIE_NAME } from '../utils/constants'
import cookie from 'react-cookies'

export const setTokenCookie = (token) => {
    cookie.remove(TOKEN_COOKIE_NAME)
    cookie.save(TOKEN_COOKIE_NAME, token)
}

export const getTokenCookie = () => {
    const tokenCookie = cookie.load(TOKEN_COOKIE_NAME)
    if(tokenCookie === undefined) {
        return {}
    } else {
        return tokenCookie
    }
}
