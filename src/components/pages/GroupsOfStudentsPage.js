import React from 'react'
import RequestService from '../../services/RequestService'
import { API_URL, GROUPS_OF_STUDENTS_PATH } from '../../utils/url'
import { Spinner, Row } from 'react-bootstrap'
import GroupsOfStudents from '../lists/GroupsOfStudents'
import { withTranslation } from 'react-i18next'


class GroupsOfStudentsPage extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            group: {},
            groups: [],
            url: API_URL + GROUPS_OF_STUDENTS_PATH,
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }
    
    setContent() {
        const { t } = this.props
        RequestService.getData(this.state.url)
            .then(groups => {
                this.setState({
                    title: t('classes'),
                    groups,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{this.state.title}</h1></Row>
                <GroupsOfStudents group={this.state.group} groups={this.state.groups}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(GroupsOfStudentsPage)