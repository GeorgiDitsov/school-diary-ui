import React from 'react'
import { TokenContext } from '../context/context'
import jwt_decode from 'jwt-decode'
import { Jumbotron, Spinner } from 'react-bootstrap'

class Info extends React.Component {
    
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
        if(this.state.isLoading) {
            return(
                <Spinner animation='border'/>
            )
        }
        return (
            <Jumbotron>
                <h4>Username: {this.state.principal.username}</h4>
                <h4>Role: {this.state.principal.role}</h4>
            </Jumbotron>
        )
    }
}

export default Info