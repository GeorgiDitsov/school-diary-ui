import React from 'react'
import { API_URL } from '../../utils/url'
import Child from './items/Child'
import RequestService  from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_PARENT_CHILDREN_URL = API_URL + '/parent/children'

class Children extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            child: [],
            children: {},
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_PARENT_CHILDREN_URL).then(response => {
            let title = response.parent.name + ', ' + response.parent.pin
            this.setContent(title, response.children)
        })
    }

    setContent(title, children) {
        this.setState(prevState => {
            return {
                title: title,
                child: children[0],
                children: children.map(child => (<Child key={child.id} child={child}/>)),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List item={this.state.child} rows={this.state.children}/>
            </React.Fragment>
        )
    }
}

export default Children