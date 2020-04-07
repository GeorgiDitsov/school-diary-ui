import React from 'react'
import { useTranslation } from 'react-i18next'
import { Nav } from 'react-bootstrap'
import { PARENT_CHILDREN_PATH } from '../../../utils/url'

const ParentNavbar = () => {
    const { t } = useTranslation()
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={PARENT_CHILDREN_PATH}>{t('my.children')}</Nav.Link>
        </Nav>
    )
}

export default ParentNavbar