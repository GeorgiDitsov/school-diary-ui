import React from 'react'
import { API_URL, STUDENTS_PATH } from '../../utils/url'
import { TokenContext } from '../../context/context'
import jwt_decode from 'jwt-decode'
import RequestService from '../../services/RequestService'
import Student from './items/Student'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_STUDENTS_URL = API_URL + STUDENTS_PATH
const API_PARENT_CHILDREN_URL = API_URL + '/parent/students'

class Students extends React.Component {
    
    static contextType = TokenContext

    constructor() {
        super()
        this.state={
            title: '',
            student: {},
            students: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const role = jwt_decode(this.context).role
        role === 'ROLE_ADMIN' && this.adminRequest()
        role === 'ROLE_PARENT' && this.parentRequest()
    }

    setContent(title, students) {
        this.setState(prevState => {
            return {
                title: title,
                student: students[0],
                students: students.map(student => (<Student key={student.id} student={student}/>)),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    adminRequest() {
        RequestService.makeRequest(API_STUDENTS_URL).then(students => {
            this.setContent('Students', students)
        })
    }

    parentRequest() {
        RequestService.makeRequest(API_PARENT_CHILDREN_URL).then(response => {
            let title = response.parent.name + ', ' + response.parent.pin
            this.setContent(title, response.children)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List item={this.state.student} rows={this.state.students}/>
            </React.Fragment>
        )
    }
}

export default Students