import React from 'react'
import { API_URL, GRADES_PATH } from '../../utils/url' 
import { TokenContext } from '../../context/context'
import jwt_decode from 'jwt-decode'
import RequestService from '../../services/RequestService'
import Grade from './items/Grade'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_GRADES_URL = API_URL + GRADES_PATH
const API_STUDENT_GRADES_URL = API_URL + '/student/grades'

class Grades extends React.Component {

    static contextType = TokenContext

    constructor() {
        super()
        this.state={
            title: '',
            grade: {},
            grades: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const role = jwt_decode(this.context).role
        role === 'ROLE_ADMIN' && this.adminRequest()
        role === 'ROLE_STUDENT' && this.studentRequest()
    }

    setContent(title, grades) {
        this.setState(prevState => {
            return {
                title: title,
                grade: grades[0],
                grades: grades.map(grade => <Grade key={grade.id} grade={grade}/>),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    adminRequest() {
        RequestService.makeRequest(API_GRADES_URL).then(grades => {
            this.setContent('Grades', grades)
        })
    }

    studentRequest() {
        RequestService.makeRequest(API_STUDENT_GRADES_URL).then(response => {
            let title = response.student.name + ', ' + response.student.pin;
            this.setContent(title, response.grades)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List item={this.state.grade} rows={this.state.grades}/>
            </React.Fragment>
        )
    }
}

export default Grades