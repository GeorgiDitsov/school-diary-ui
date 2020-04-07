import React from 'react'
import { Nav } from 'react-bootstrap'
import { TEACHER_COURSES_PATH } from '../../../utils/url'
import { useTranslation } from 'react-i18next'

const TeacherNavbar = () => {
    const { t } = useTranslation()
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={TEACHER_COURSES_PATH}>{t('my.courses')}</Nav.Link>
        </Nav>
    )
}

export default TeacherNavbar