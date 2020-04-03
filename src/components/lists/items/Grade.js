import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Grade(props) {
    return (
        <tr>
            <td>{props.grade.id}</td>
            <td>{props.grade.value}</td>
            <td>{props.grade.inserted}</td>
            <td>{props.grade.updated}</td>
            <td>{props.grade.student.name + ' ' + props.grade.student.pin}</td>
            <td>{props.grade.course.subject.name + ', ' + props.grade.course.teacher.name + ' ' + props.grade.course.teacher.pin}</td>
            <ItemOptions id={props.grade.id}/>
        </tr>
    )
}

export default Grade