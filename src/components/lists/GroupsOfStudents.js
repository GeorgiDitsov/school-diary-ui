import React from 'react'
import RequestService from '../../services/RequestService'
import { API_URL, GROUPS_OF_STUDENTS_PATH } from '../../utils/url'
import { GroupOfStudentsRow, GroupOfStudentsColumnNames } from './items/GroupOfStudents'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_GROUPS_OF_STUDENTS_URL = API_URL + GROUPS_OF_STUDENTS_PATH

class GroupsOfStudents extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            groups: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_GROUPS_OF_STUDENTS_URL).then(groups => {
            this.setContent(t('classes'), groups)
        })
    }
    
    setContent(title, groups) {
        this.setState(prevState => {
            return {
                title: title,
                groups: groups.map(group => (<GroupOfStudentsRow key={group.id} group={group}/>)),
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
                <List columnNames={(<GroupOfStudentsColumnNames/>)} rows={this.state.groups}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(GroupsOfStudents)