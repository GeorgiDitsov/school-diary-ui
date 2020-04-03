import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Course(props) {
    return (
        <tr>
            <td>{props.course.id}</td>
            <td>{props.course.group.year + props.course.group.letter}</td>
            <td>{props.course.subject.name}</td>
            <td>{props.course.teacher === null ? 'n/a' : props.course.teacher.name + ', ' + props.course.teacher.pin}</td>
            <ItemOptions id={props.course.id}/>
        </tr>
    )
}

export default Course