import React from 'react'
import httpRequest from '../utils/httpRequest'
import Header from './Header'
import { Spinner } from 'react-bootstrap'

class Home extends React.Component {
    constructor() {
        super()
        this.state= {
            principal: '',
            isLoading: true
        }
    }

    componentDidMount() {
        let response = httpRequest.get('http://localhost:8080/home')
        this.setState(prevState => {
            return {
                principal: response,
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading ? <Spinner animation='border'/> : <h3>Welcome, {this.state.principal}!</h3>}
            </div>
        )
    }
}

export default Home