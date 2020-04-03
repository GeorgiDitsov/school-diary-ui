import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Semester(props) {
    return (
        <tr>
            <td>{props.semester.id}</td>
            <td>{props.semester.begin}</td>
            <td>{props.semester.end}</td>
            <ItemOptions id={props.semester.id}/>
        </tr>
    )
}

export default Semester