import React from 'react'
import { TokenContext } from '../../context/context'
import { Route, Redirect } from 'react-router-dom'
import { LOGIN_PATH } from '../../utils/url'
import { Container, Row } from 'react-bootstrap'
import Header from '../header/Header'

export function PrivateRoute({ component: Component, ...rest }) {
    const token = React.useContext(TokenContext)
    return (
        <Route {...rest}
            render = {
                props => token === undefined ? 
                    (<Redirect to={LOGIN_PATH}/>)
                    : 
                    (
                        <React.Fragment>
                            <Header />
                            <Container className='my-5'>
                                <Row className='justify-content-md-center'>
                                    <Component component={props.component}/>
                                </Row>
                            </Container>
                        </React.Fragment>
                    ) 
            }>
        </Route>
    )
}