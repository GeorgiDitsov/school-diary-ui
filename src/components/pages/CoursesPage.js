import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, COURSES_PATH, SCHOOL_SUBJECTS_PATH, TEACHERS_PATH, GROUPS_OF_STUDENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import Courses from '../lists/Courses'
import CreateButton from '../buttons/CreateButton'
import { withTranslation } from 'react-i18next'

class CoursesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            course: empty.course,
            courses: [],
            groupsOfStudents: [],
            schoolSubjects: [],
            teachers: [],
            url: {
                courses: API_URL + COURSES_PATH,
                groupsOfStudents: API_URL + GROUPS_OF_STUDENTS_PATH,
                schoolSubjects: API_URL + SCHOOL_SUBJECTS_PATH,
                teachers: API_URL + TEACHERS_PATH,
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
        RequestService.getData(this.state.url.groupsOfStudents)
            .then(groupsOfStudents => {
                this.setState({ groupsOfStudents })
            })
        RequestService.getData(this.state.url.schoolSubjects)
            .then(schoolSubjects => {
                this.setState({ schoolSubjects })
            })
        RequestService.getData(this.state.url.teachers)
            .then(teachers => {
                this.setState({ teachers })
            })
        RequestService.getData(this.state.url.courses)
            .then(courses => {
                this.setState({
                    courses,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ course: empty.course })
        this.handleModal()
    }

    onEdit(course) {
        this.setState({ course })
        this.handleModal()
    }

    onDelete(courseId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url.courses + '/' + courseId, courseId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        courses: [...this.state.courses].filter(course => course.id !== courseId)
                    })
                }
            })
    }

    handleCreate(course) {
        RequestService.create(this.state.url.courses, course)
            .then(newCourse => {
            this.setState({
                courses: [...this.state.courses, newCourse],
                showModal: false
            })
        })
    }

    handleUpdate(course) {
        RequestService.update(this.state.url.courses + '/' + course.id, course)
            .then(updatedCourse => {
                this.setState({
                    courses: [...this.state.courses].map(course => {
                        if (course.id === updatedCourse.id) {
                            return updatedCourse
                        }
                        return course
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
        return(
            <React.Fragment>
                <h1>{translate('courses')}</h1>
                <CreateButton buttonText={translate('message.add.course')} onCreate={this.onCreate}/>
                <Courses 
                    course={this.state.course} 
                    courses={this.state.courses} 
                    groupsOfStudents={this.state.groupsOfStudents} 
                    schoolSubjects={this.state.schoolSubjects} 
                    teachers={this.state.teachers} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.course.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(CoursesPage)