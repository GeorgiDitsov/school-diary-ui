import React from 'react'
import { API_URL, STUDENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { StudentRow, StudentColumnNames } from './items/Student'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_STUDENTS_URL = API_URL + STUDENTS_PATH

class Students extends React.Component {
    
    constructor() {
        super()
        this.state={
            title: '',
            students: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_STUDENTS_URL)
            .then(students => {
                this.setContent(t('students'), students)
            })
    }

    setContent(title, students) {
        this.setState(prevState => {
            return {
                title: title,
                students: students.map(student => (<StudentRow key={student.id} student={student}/>)),
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
                <List columnNames={(<StudentColumnNames/>)} rows={this.state.students}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Students)