import React from 'react'
import { API_URL, CUSTOMERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { CustomerColumnNames, CustomerRow } from './items/Customer'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_CUSTOMERS_URL = API_URL + CUSTOMERS_PATH

class Customers extends React.Component {
    
    constructor() {
        super()
        this.state={
            title: '',
            customers: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_CUSTOMERS_URL).then(customers => {
            this.setContent(t('customers'), customers)
        })
    }

    setContent(title, customers) {
        this.setState(prevState => {
            return {
                title: title,
                customers: customers.map(customer => (<CustomerRow key={customer.id} customer={customer}/>)),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List columnNames={(<CustomerColumnNames/>)} rows={this.state.customers}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Customers)