import httpRequest from '../utils/httpRequest'

class RequestService {
    
    async makeRequest(url) {
        return await httpRequest.get(url)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
            }).then(data => {
                console.log(data)
                return data
            })
    }
}

export default new RequestService()