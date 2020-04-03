import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function SchoolSubject(props) {
    return (
        <tr>
            <td>{props.subject.id}</td>
            <td>{props.subject.name}</td>
            <ItemOptions id={props.subject.id}/>
        </tr>
    )
}

export default SchoolSubject