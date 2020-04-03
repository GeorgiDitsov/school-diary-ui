import React from 'react'
import { TokenContext } from '../context/context'
import jwt_decode from 'jwt-decode'
import { Container, Row, Spinner } from 'react-bootstrap'

class Home extends React.Component {

    static contextType = TokenContext
    
    constructor() {
        super()
        this.state={
            principal: {},
            isLoading: true
        }
    }
    
    componentDidMount() {
        this.setState(prevState => {
            return {
                principal: jwt_decode(this.context),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        return (
            <Container className='my-5'>
                <Row className='justify-content-md-center'>
                    {
                        this.state.isLoading ? 
                            (<Spinner animation='border'/>) 
                            : 
                            (<h1>Welcome, {this.state.principal.username}!</h1>)
                    }
                </Row>
            </Container>
        )
    }
}

export default Home