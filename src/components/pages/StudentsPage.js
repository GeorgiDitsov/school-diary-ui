import React from 'react'
import { API_URL, STUDENTS_PATH, GROUPS_OF_STUDENTS_PATH, PARENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import Students from '../lists/Students'
import { withTranslation } from 'react-i18next'

class StudentsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {},
            students: [],
            groups: [],
            parents: [],
            url: {
                students: API_URL + STUDENTS_PATH,
                groups: API_URL + GROUPS_OF_STUDENTS_PATH,
                parents: API_URL + PARENTS_PATH
            },
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
        this.addStudent = this.addStudent.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }

    setContent() {
        RequestService.getData(this.state.url.groups)
            .then(groups => {
                this.setState({
                    groups
                })
            })
        RequestService.getData(this.state.url.parents)
            .then(parents => {
                this.setState({
                    parents
                })
            })
       RequestService.getData(this.state.url.students)
            .then(students => {
                this.setState({
                    students,
                    isLoading: false
                })
            })
    }

    addStudent(student) {
        RequestService.create(this.state.url, student)
            .then(newStudent => {
                this.setState({
                    students: [...this.state.students, newStudent]
                })
            })
    }

    onEdit(student) {
        this.setState({
            student
        })
    }

    onDelete(studentId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url + '/' + studentId, studentId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    let students = [...this.state.students]
                    this.setState({
                        students
                    })
                }
            })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        const { t: translate } = this.props
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{translate('students')}</h1></Row>
                <Students 
                    student={this.state.student} 
                    groups={this.state.groups} 
                    parents={this.state.parents} 
                    students={this.state.students} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(StudentsPage)