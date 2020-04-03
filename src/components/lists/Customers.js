import React from 'react'
import { API_URL, CUSTOMERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import Customer from './items/Customer'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_CUSTOMERS_URL = API_URL + CUSTOMERS_PATH

class Customers extends React.Component {
    constructor() {
        super()
        this.state={
            customer: {},
            cutomers: [],
            isLoading: true
        }
        this.setCustomers = this.setCustomers.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_CUSTOMERS_URL).then(customers => {
            this.setCustomers(customers)
            this.setState(prevState => {
                return {
                    customer: customers[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setCustomers(customers) {
        this.setState({
            customers: customers.map(customer => (<Customer key={customer.id} customer={customer}/>))
        })
    }

    render() {
        console.log(this.state.headers)
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.customer} rows={this.state.customers}/>
        )
    }
}

export default Customers