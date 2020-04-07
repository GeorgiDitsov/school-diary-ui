import React from 'react'
import { API_URL, COURSES_PATH } from '../../utils/url'
import { TokenContext } from '../../context/context'
import jwt_decode from 'jwt-decode'
import RequestService from '../../services/RequestService'
import { CourseRow, CourseColumnNames } from './items/Course'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { ROLE_ADMIN } from '../../utils/constants'
import { withTranslation } from 'react-i18next'

const API_COURSES_URL = API_URL + COURSES_PATH
const API_TEACHER_COURSES = API_URL + 'teacher/courses'

class Courses extends React.Component {

    static contextType = TokenContext

    constructor() {
        super()
        this.state={
            title: '',
            courses: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const role = jwt_decode(this.context).role
        role === ROLE_ADMIN && this.adminRequest()
    }

    setContent(title, courses) {
        this.setState(prevState => {
            return {
                title: title,
                courses: courses.map(course => <CourseRow key={course.id} course={course}/>),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    adminRequest() {
        const { t } = this.props
        RequestService.makeRequest(API_COURSES_URL).then(courses => {
            this.setContent(t('courses'), courses)
        })
    }

    teacherRequest() {
        RequestService.makeRequest(API_TEACHER_COURSES).then(response => {
            let title = response.teacher.name + ', ' + response.teacher.pin
            this.setContent(title, response.courses)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List columnNames={(<CourseColumnNames/>)} rows={this.state.courses}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Courses)