import React from 'react'
import { API_URL, CUSTOMERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import Customers from '../lists/Customers'
import { withTranslation } from 'react-i18next'

class CustomersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            customer: {},
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
        const { t: translate } = this.props
        RequestService.getData(this.state.url)
            .then(customers => {
                this.setState({
                    title: translate('customers'),
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
            customer: {},
        })
    }

    handleUpdate(customer) {
        RequestService.update(API_URL + CUSTOMERS_PATH + '/' + customer.id, customer)
            .then(updatedCustomer => {
                this.setState(prevState => {
                    return {
                        customer: {},
                        customers: prevState.customers.map(customer => {
                            if (customer.id === updatedCustomer.id) {
                                return updatedCustomer
                            }
                            return customer
                        })
                    }
                })
            })
    }
        
    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'>
                    <h1>{this.state.title}</h1>
                </Row>
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