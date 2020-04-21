import React from 'react'

const Child = (props) => {
    return (
        <tr>
            <td>{props.child.id}</td>
            <td>{props.child.name}</td>
            <td>{props.child.pin}</td>
            <td>{props.child.group ? props.child.group.year + props.child.group.letter : 'n/a'}</td>
            <td>{props.child.lastGrade}</td>
            <td>{props.child.success}</td>
            <td></td>
        </tr>
    )
}

export default Child