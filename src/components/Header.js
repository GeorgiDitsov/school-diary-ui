import React from 'react'
import { Navbar } from 'react-bootstrap'
import icon from '../school.svg'

class Header extends React.Component {
    render() {
        return (
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
                <Navbar.Brand href='/home'>
                    <img
                        alt='' 
                        src={icon} 
                        width='30' 
                        height='30' 
                        className='d-inline-block align-top' 
                    />{' '}
                    School Diary
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            </Navbar>
        )
    }
}

export default Header