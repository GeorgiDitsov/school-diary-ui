import React from 'react'
import { API_URL, PARENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import Parent from './items/Parent'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_PARENTS_URL = API_URL + PARENTS_PATH

class Parents extends React.Component {

    constructor() {
        super()
        this.state={
            parent: {},
            parents: [],
            isLoading: true
        }
        this.setParents = this.setParents.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_PARENTS_URL).then(parents => {
            this.setParents(parents)
            this.setState(prevState => {
                return {
                    parent: parents[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setParents(parents) {
        this.setState({
            parents: parents.map(parent => (<Parent key={parent.id} parent={parent}/>))
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.parent} rows={this.state.parents}/>
        )
    }
}

export default Parents