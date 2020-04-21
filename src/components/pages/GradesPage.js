import React from 'react'
import { API_URL, GRADES_PATH } from '../../utils/url' 
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER } from '../../utils/constants'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import Grades from '../lists/Grades'
import PrincipalContext from '../../context/principal-context'
import { withTranslation } from 'react-i18next'

class GradesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            grade: {},
            grades: [],
            url: {
                admin: API_URL + GRADES_PATH,
                student: API_URL + '/student/grades',
                teacher: API_URL + '/students/{id}/grades'
            },
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        let role = (this.context).role
        role === ROLE_ADMIN && this.adminRequest()
        role === ROLE_STUDENT && this.userRequest(this.state.url.student)
        role === ROLE_TEACHER && this.userRequest(this.state.url.teacher)
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
                let title = response.student.name + ', ' 
                    + response.student.pin + ', ' 
                    + response.student.group.view;
                this.setContent(title, response.grades)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{this.state.title}</h1></Row>
                <Grades grade={this.state.grade} grades={this.state.grades}/>
            </React.Fragment>
        )
    }
}

GradesPage.contextType = PrincipalContext

export default withTranslation()(GradesPage)