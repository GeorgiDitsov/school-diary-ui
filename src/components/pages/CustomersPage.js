import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, CUSTOMERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import Customers from '../lists/Customers'
import { withTranslation } from 'react-i18next'

class CustomersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: empty.customer,
            customers: [],
            url: API_URL + CUSTOMERS_PATH,
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }
    
    setContent() {
        RequestService.getData(this.state.url)
            .then(customers => {
                this.setState({
                    customers,
                    isLoading: false
                })
            })
    }

    onEdit(customer) {
        this.setState({
            customer,
        })
    }

    handleCloseModal() {
        this.setState({
            customer: empty.customer,
        })
    }

    handleUpdate(customer) {
        RequestService.update(API_URL + CUSTOMERS_PATH + '/' + customer.id, customer)
            .then(updatedCustomer => {
                this.setState({
                        customer: empty.customer,
                        customers: [...this.state.customers].map(customer => {
                            if (customer.id === updatedCustomer.id) {
                                return updatedCustomer
                            }
                            return customer
                        })
                })
            })
    }
        
    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        const { t: translate } = this.props
        return (
            <React.Fragment>
                <h1>{translate('customers')}</h1>
                <Customers 
                    customer={this.state.customer} 
                    customers={this.state.customers} 
                    onEdit={this.onEdit} 
                    handleCloseModal={this.handleCloseModal} 
                    handleUpdate={this.handleUpdate}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(CustomersPage)