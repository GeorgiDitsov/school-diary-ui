import React from 'react'
import { API_URL, SCHOOL_SUBJECTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import SchoolSubject from './items/SchoolSubject'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_SCHOOL_SUBJECTS_URL = API_URL + SCHOOL_SUBJECTS_PATH

class SchoolSubjects extends React.Component {

    constructor() {
        super()
        this.state={
            subject: {},
            subjects: [],
            isLoading: true
        }
        this.setSchoolSubjects = this.setSchoolSubjects.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_SCHOOL_SUBJECTS_URL).then(subjects => {
            this.setSchoolSubjects(subjects)
            this.setState(prevState => {
                return {
                    subject: subjects[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setSchoolSubjects(subjects) {
        this.setState({
            subjects: subjects.map(subject => (<SchoolSubject key={subject.id} subject={subject}/>))
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.subject} rows={this.state.subjects}/>
        )
    }
}

export default SchoolSubjects