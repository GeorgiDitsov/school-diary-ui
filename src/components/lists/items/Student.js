import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Student(props) {
    return (
        <tr>
            <td>{props.student.id}</td>
            <td>{props.student.name}</td>
            <td>{props.student.pin}</td>
            <td>{props.student.group === null ? 'n/a' : props.student.group.year + props.student.group.letter}</td>
            <td>
                {props.student.parents.map(parent => {
                    return (
                        <div key={parent.id}>{parent.name + ', ' + parent.pin}</div>
                    )
                })}
            </td>
            <td>{props.student.customer.username}</td>
            <ItemOptions id={props.student.id}/>
        </tr>
    )
}

export default Student