import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function GroupOfStudents(props) {
    return (
        <tr>
            <td>{props.group.id}</td>
            <td>{props.group.year}</td>
            <td>{props.group.letter}</td>
            <ItemOptions id={props.group.id}/>
        </tr>
    )
}

export default GroupOfStudents