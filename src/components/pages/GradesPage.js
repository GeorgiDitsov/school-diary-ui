import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, GRADES_PATH, STUDENTS_PATH, COURSES_PATH } from '../../utils/url'
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER } from '../../utils/constants'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import Grades from '../lists/Grades'
import PrincipalContext from '../../context/principal-context'
import { withTranslation } from 'react-i18next'

class GradesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            grade: empty.grade,
            grades: [],
            url: {
                admin: API_URL + GRADES_PATH,
                student: API_URL + '/student' + GRADES_PATH,
            },
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        let role = (this.context).role
        role === ROLE_ADMIN && this.adminRequest(this.state.url.admin)
        role === ROLE_STUDENT && this.userRequest(this.state.url.student)
        role === ROLE_TEACHER && 
            this.userRequest(
                API_URL + COURSES_PATH + '/' + this.props.match.params.courseId 
                + STUDENTS_PATH + '/' + this.props.match.params.studentId + GRADES_PATH
            )
    }

    setContent(title, grades) {
        this.setState({
            title,
            grades,
            isLoading: false
        })
    }

    adminRequest() {
        const { t: translate } = this.props
        RequestService.getData(this.state.url.admin)
            .then(grades => {
                this.setContent(translate('grades'), grades)
            })
    }

    userRequest(url) {
        RequestService.getData(url)
            .then(response => {
                const title = response.student.name + ', ' 
                    + response.student.pin + ', ' 
                    + response.student.groupOfStudents.view;
                this.setContent(title, response.grades)
        })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <Grades grade={this.state.grade} grades={this.state.grades}/>
            </React.Fragment>
        )
    }
}

GradesPage.contextType = PrincipalContext

export default withTranslation()(GradesPage)