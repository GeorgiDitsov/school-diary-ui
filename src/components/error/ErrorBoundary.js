import React from 'react'
import { Alert } from 'react-bootstrap'

class ErrorBoundary extends React.Component {
    
    constructor(){
        super()
        this.state={
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            errorInfo: info
        })
    }

    render() {
        if(this.state.errorInfo) {
            return <Alert key='danger' variant='danger'>{this.state.error}</Alert>
        }
        return this.props.children
    }
}

export default ErrorBoundary