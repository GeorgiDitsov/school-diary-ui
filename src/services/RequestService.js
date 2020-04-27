import httpRequest from '../utils/httpRequest'

class RequestService {
    
    async getData(url) {
        return await httpRequest.get(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                return data
            })
    }

    async create(url, requestBody) {
        return await httpRequest.post(url, requestBody)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                return data
            })
    }

    async update(url, requestBody) {
        return await httpRequest.put(url, requestBody)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                return data
            })
    }

    async delete(url, requestBody) {
        let isSuccessful = false
        await httpRequest.delete(url, requestBody)
            .then(response => {
                if (response.ok) {
                    isSuccessful = true
                }
            })
        return isSuccessful
    }
}

export default new RequestService()