import React from 'react'
import { useTranslation } from 'react-i18next'
import { Nav } from 'react-bootstrap'
import { STUDENT_GRADES_PATH } from '../../../utils/url'

const StudentNavbar = () => {
    const { t } = useTranslation()
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={STUDENT_GRADES_PATH}>{t('my.grades')}</Nav.Link>
        </Nav>
    )
}

export default StudentNavbar