import React from 'react'
import ItemOptions from '../../buttons/ItemOptions'

function Teacher(props) {
    return (
        <tr>
            <td>{props.teacher.id}</td>
            <td>{props.teacher.name}</td>
            <td>{props.teacher.pin}</td>
            <td>
                {props.teacher.subjects.map(subject =>{
                    return (<div key={subject.id} >{subject.name}</div>)
                })}
            </td>
            <td>{props.teacher.customer.username}</td>
            <ItemOptions id={props.teacher.id}/>
        </tr>
    )
}

export default Teacher