import httpRequest from '../utils/httpRequest'
import { API_URL, CUSTOMERS_PATH } from '../utils/url'

const API_CUSTOMERS_URL = API_URL + CUSTOMERS_PATH

class CustomerService {

    async loadAllCustomers() {
        return await httpRequest.get(API_CUSTOMERS_URL)
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

export default new CustomerService()