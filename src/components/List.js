import React from 'react'
import { Table } from 'react-bootstrap'

function List(props) {
    return ( 
        <Table striped bordered responsive>
            <thead className='thead-dark'>
                <tr>
                    {Object.keys(props.item).map(key => (<th key={key}>{key}</th>))}
                    <th>options</th>
                </tr>
            </thead>
            <tbody>
                {props.rows}
            </tbody>
        </Table>
    )
}

export default List