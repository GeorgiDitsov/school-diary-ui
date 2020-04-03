import { getTokenCookie } from './cookie'

class HttpRequest {

    static async get(url) {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': getTokenCookie().value 
            }
        }).catch(error => {
            throw new Error(error)
        })
    }

    static async post(url, requestBody) {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': getTokenCookie().value
            },
            body: JSON.stringify(requestBody)
        }).catch(error => {
            throw new Error(error)
        })
    }

    static async put(url, requestBody) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': getTokenCookie().value
            },
            body: JSON.stringify(requestBody)
        }).catch(error => {
            throw new Error(error)
        })
    }

    static async delete(url, requestBody) {
        return await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': getTokenCookie().value
            },
            body: JSON.stringify(requestBody)
        }).catch(error => {
            throw new Error(error)
        })
    }
}

export default HttpRequest