import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Parent(props) {
    return (
        <tr>
            <td>{props.parent.id}</td>
            <td>{props.parent.name}</td>
            <td>{props.parent.pin}</td>
            <td>{props.parent.customer.username}</td>
            <ItemOptions id={props.parent.id}/>
        </tr>
    )
}

export default Parent