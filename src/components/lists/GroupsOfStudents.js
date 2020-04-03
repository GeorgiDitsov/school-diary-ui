import React from 'react'
import RequestService from '../../services/RequestService'
import { API_URL, GROUPS_OF_STUDENTS_PATH } from '../../utils/url'
import GroupOfStudents from './items/GroupOfStudents'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_GROUPS_OF_STUDENTS_URL = API_URL + GROUPS_OF_STUDENTS_PATH

class GroupsOfStudents extends React.Component {

    constructor() {
        super()
        this.state={
            group: {},
            groups: [],
            isLoading: true
        }
        this.setGroups = this.setGroups.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_GROUPS_OF_STUDENTS_URL).then(groups => {
            this.setGroups(groups)
            this.setState(prevState => {
                return {
                    group: groups[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setGroups(groups) {
        this.setState({
            groups: groups.map(group => (<GroupOfStudents key={group.id} group={group}/>))
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.group} rows={this.state.groups}/>
        )
    }
}

export default GroupsOfStudents