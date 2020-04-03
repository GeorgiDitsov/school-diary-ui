import cookie from 'react-cookies'

const tokenCookieName = 'token'

export const setTokenCookie = (token) => {
    cookie.remove(tokenCookieName)
    cookie.save(tokenCookieName, token)
}

export const getTokenCookie = () => {
    const tokenCookie = cookie.load(tokenCookieName)
    if(tokenCookie === undefined) {
        return {}
    } else {
        return tokenCookie
    }
}
