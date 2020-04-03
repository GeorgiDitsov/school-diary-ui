import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Customer(props) {
    return (
        <tr>
            <td>{props.customer.id}</td>
            <td>{props.customer.username}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.role.name}</td>
            <ItemOptions id={props.customer.id}/>
        </tr>
    )
}

export default Customer