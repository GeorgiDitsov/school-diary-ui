import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonGroup, Button } from 'react-bootstrap'

const AdminOptions = (props) => {
    const { t } = useTranslation()
    return (
        <td>
            <ButtonGroup>
                <Button variant='primary'>{t('edit')}</Button>
                <Button variant='danger'>{t('delete')}</Button>
            </ButtonGroup>
        </td>
    )
}

export default AdminOptions