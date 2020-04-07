import React from 'react'
import jwt_decode from 'jwt-decode'
import { useTranslation } from 'react-i18next'
import { HOME_PATH, INFO_PATH, LOGOUT_PATH } from '../../utils/url'
import { Navbar, NavDropdown } from 'react-bootstrap'
import icon from '../../school.svg'
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER, ROLE_PARENT } from '../../utils/constants'
import AdminNavbar from './navbars/AdminNavbar'
import StudentNavbar from './navbars/StudentNavbar'
import TeacherNavbar from './navbars/TeacherNavbar'
import ParentNavbar from './navbars/ParentNavbar'

const Header = (props) => {
    const principal = jwt_decode(props.token)
    console.log(principal)
    const { t } = useTranslation()
        return (
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
                <Navbar.Brand href={HOME_PATH}>
                    <img
                        alt='' 
                        src={icon} 
                        width='30' 
                        height='30' 
                        className='d-inline-block align-top' 
                    />{' ' + t('school.diary')}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    {principal.role === ROLE_ADMIN && (<AdminNavbar/>)}
                    {principal.role === ROLE_STUDENT && (<StudentNavbar/>)}
                    {principal.role === ROLE_TEACHER && (<TeacherNavbar/>)}
                    {principal.role === ROLE_PARENT && (<ParentNavbar/>)}
                    <NavDropdown title={principal.username} alignRight>
                        <NavDropdown.Item href={INFO_PATH}>{t('info')}</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href={LOGOUT_PATH}>{t('logout')}</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        )
}

export default Header 