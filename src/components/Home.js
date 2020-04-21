import React from 'react'
import LocalizationContext from '../context/localization-context'
import PrincipalContext from '../context/principal-context'
import { Container, Row, Jumbotron } from 'react-bootstrap'

const Home = () => {
    const translate = React.useContext(LocalizationContext)
    const principal = React.useContext(PrincipalContext)
    const [title] = React.useState(translate('message.welcome', {username: principal.username}))
    return (
        <Container className='my-5'>
            <Row className='justify-content-md-center'>
                {(<Jumbotron><h1>{title}</h1></Jumbotron>)}
            </Row>
        </Container>
    )
}

export default Home