import React from 'react'
import { Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const List = (props) => {
    const { t } = useTranslation()
    return ( 
        <Table striped bordered responsive>
            <thead className='thead-dark'>
                <tr>
                    {props.columnNames}
                    <th>{t('options')}</th>
                </tr>
            </thead>
            <tbody>
                {props.rows}
            </tbody>
        </Table>
    )
}

export default List