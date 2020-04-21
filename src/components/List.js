import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Table } from 'react-bootstrap'

const List = (props) => {
    const translate = React.useContext(LocalizationContext)
    return ( 
        <Table striped bordered responsive>
            <thead className='thead-dark'>
                <tr>
                    {props.columnNames}
                    <th>{translate('actions')}</th>
                </tr>
            </thead>
            <tbody>
                {props.rows}
            </tbody>
        </Table>
    )
}

export default List