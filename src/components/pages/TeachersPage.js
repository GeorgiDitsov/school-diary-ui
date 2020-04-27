import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, TEACHERS_PATH, SCHOOL_SUBJECTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import Teachers from '../lists/Teachers'
import { withTranslation } from 'react-i18next'

class TeachersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            teacher: empty.teacher,
            teachers: [],
            schoolSubjects: [],
            url: {
                teachers: API_URL + TEACHERS_PATH,
                schoolSubjects: API_URL + SCHOOL_SUBJECTS_PATH
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
        RequestService.getData(this.state.url.schoolSubjects)
            .then(schoolSubjects => {
                this.setState({ schoolSubjects })
            })
        RequestService.getData(this.state.url.teachers)
            .then(teachers => {
                this.setState({
                    teachers,
                    isLoading: false
                })
        })
    }

    onCreate() {
        this.setState({ teacher: empty.teacher })
        this.handleModal()
    }

    onEdit(teacher) {
        this.setState({ teacher })
        this.handleModal()
    }

    onDelete(teacherId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url.teachers + '/' + teacherId, teacherId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        teachers: [...this.state.teachers].filter(teacher => teacher.id !== teacherId)
                    })
                }
            })
    }

    handleCreate(teacher) {
        RequestService.create(this.state.url.teachers, teacher)
            .then(newTeacher => {
            this.setState({
                teachers: [...this.state.teachers, newTeacher],
                showModal: false
            })
        })
    }

    handleUpdate(teacher) {
        RequestService.update(this.state.url.teachers + '/' + teacher.id, teacher)
            .then(updatedTeacher => {
                this.setState({
                    teachers: [...this.state.teachers].map(teacher => {
                        if (teacher.id === updatedTeacher.id) {
                            return updatedTeacher
                        }
                        return teacher
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
                <h1>{translate('teachers')}</h1>
                <CreateButton buttonText={translate('message.add.teacher')} onCreate={this.onCreate}/>
                <Teachers 
                    teacher={this.state.teacher} 
                    schoolSubjects={this.state.schoolSubjects} 
                    teachers={this.state.teachers} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.teacher.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(TeachersPage)