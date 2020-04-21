import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonGroup, Button } from 'react-bootstrap'

const AdminOptions = (props) => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <td>
                <ButtonGroup>
                    {props.onEdit !== undefined && <Button variant='primary' onClick={() => props.onEdit(props.item)}>{t('edit')}</Button>}
                    {props.onDelete !== undefined && <Button variant='danger' onClick={() => props.onDelete(props.item.id)}>{t('delete')}</Button>}
                </ButtonGroup>
            </td>
        </React.Fragment>
    )
}

export default AdminOptions