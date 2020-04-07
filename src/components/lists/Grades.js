import React from 'react'
import { API_URL, GRADES_PATH } from '../../utils/url' 
import { TokenContext } from '../../context/context'
import jwt_decode from 'jwt-decode'
import { ROLE_ADMIN, ROLE_STUDENT } from '../../utils/constants'
import RequestService from '../../services/RequestService'
import { GradeColumnNames, GradeRow } from './items/Grade'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_GRADES_URL = API_URL + GRADES_PATH
const API_STUDENT_GRADES_URL = API_URL + '/student/grades'

class Grades extends React.Component {

    static contextType = TokenContext

    constructor() {
        super()
        this.state={
            title: '',
            grades: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const role = jwt_decode(this.context).role
        role === ROLE_ADMIN && this.adminRequest()
        role === ROLE_STUDENT && this.studentRequest()
    }

    setContent(title, grades) {
        this.setState(prevState => {
            return {
                title: title,
                grades: grades.map(grade => <GradeRow key={grade.id} grade={grade}/>),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    adminRequest() {
        const { t } = this.props
        RequestService.makeRequest(API_GRADES_URL).then(grades => {
            this.setContent(t('grades'), grades)
        })
    }

    studentRequest() {
        RequestService.makeRequest(API_STUDENT_GRADES_URL).then(response => {
            let title = response.student.name + ', ' + response.student.pin + 
                ', ' + response.student.group.view;
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
                <List columnNames={(<GradeColumnNames/>)} rows={this.state.grades}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Grades)