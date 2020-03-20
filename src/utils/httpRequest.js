import axios from 'axios'

class HttpRequest {

    static async get(url) {
        return axios.get(url)
            .then(response => {
                return response
            }).catch(error => {
                return error
            })
    }

    static async post(url, body) {
        return axios.post(url, JSON.stringify(body), {
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => {
            return response
        }).catch(error => {
            return error
        })
    }
}

export default HttpRequest