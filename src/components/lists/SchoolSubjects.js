import React from 'react'
import { API_URL, SCHOOL_SUBJECTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { SchoolSubjectRow, SchoolSubjectColumnNames } from './items/SchoolSubject'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_SCHOOL_SUBJECTS_URL = API_URL + SCHOOL_SUBJECTS_PATH

class SchoolSubjects extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            subjects: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_SCHOOL_SUBJECTS_URL).then(subjects => {
            this.setContent(t('school.subjects'), subjects)
        })
    }

    setContent(title, subjects) {
        this.setState(prevState => {
            return {
                title: title,
                subjects: subjects.map(subject => (<SchoolSubjectRow key={subject.id} subject={subject}/>)),
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
                <List columnNames={(<SchoolSubjectColumnNames/>)} rows={this.state.subjects}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(SchoolSubjects)