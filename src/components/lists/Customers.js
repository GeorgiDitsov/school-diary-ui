import React from 'react'
import { CustomerRow, CustomerColumnNames } from './items/Customer'
import CustomerEdit from '../../containers/CustomerEdit'
import List from '../List'

const Customers = (props) => {

    const onEdit = (customer) => {
        props.onEdit(customer)
    }

    const handleCloseModal = () => {
        props.handleCloseModal()
    }

    const handleUpdate = (customer) => {
        props.handleUpdate(customer)
    }

    let rows = props.customers.map(customer => 
        <CustomerRow key={customer.id} customer={customer} onEdit={onEdit}/>)
    return (
        <React.Fragment>
            {props.customer.id && 
                <CustomerEdit 
                    customer={props.customer} 
                    handleCloseModal={handleCloseModal} 
                    handleUpdate={handleUpdate}
                />
            }
            <List columnNames={(<CustomerColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Customers