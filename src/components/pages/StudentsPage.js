import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, STUDENTS_PATH, GROUPS_OF_STUDENTS_PATH, PARENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import Students from '../lists/Students'
import { withTranslation } from 'react-i18next'

class StudentsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            student: empty.student,
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
        this.onCreate = this.onCreate.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }

    setContent() {
        RequestService.getData(this.state.url.groups)
            .then(groups => {
                this.setState({ groups })
            })
        RequestService.getData(this.state.url.parents)
            .then(parents => {
                this.setState({ parents })
            })
       RequestService.getData(this.state.url.students)
            .then(students => {
                this.setState({
                    students,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ student: empty.student })
        this.handleModal()
    }

    onEdit(student) {
        this.setState({ student })
        this.handleModal()
    }

    onDelete(studentId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url.students + '/' + studentId, studentId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        students: [...this.state.students].filter(student => student.id !== studentId)
                    })
                }
            })
    }

    handleCreate(student) {
        RequestService.create(this.state.url.students, student)
            .then(newStudent => {
            this.setState({
                students: [...this.state.students, newStudent],
                showModal: false
            })
        })
    }

    handleUpdate(student) {
        RequestService.update(this.state.url.students + '/' + student.id, student)
            .then(updatedStudent => {
                this.setState({
                    students: [...this.state.students].map(student => {
                        if (student.id === updatedStudent.id) {
                            return updatedStudent
                        }
                        return student
                    }),
                    showModal: false
                })
            })
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        const { t: translate } = this.props
        return (
            <React.Fragment>
                <h1>{translate('students')}</h1>
                <CreateButton buttonText={translate('message.add.student')} onCreate={this.onCreate}/>
                <Students 
                    student={this.state.student} 
                    groups={this.state.groups} 
                    parents={this.state.parents} 
                    students={this.state.students} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.student.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(StudentsPage)