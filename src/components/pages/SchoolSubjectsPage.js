import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, SCHOOL_SUBJECTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import SchoolSubjects from '../lists/SchoolSubjects'
import { withTranslation } from 'react-i18next'

class SchoolSubjectPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            schoolSubject: empty.schoolSubject,
            schoolSubjects: [],
            url: API_URL + SCHOOL_SUBJECTS_PATH,
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
        RequestService.getData(this.state.url)
            .then(schoolSubjects => {
                this.setState({
                    schoolSubjects,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ schoolSubject: empty.schoolSubject })
        this.handleModal()
    }

    onEdit(schoolSubject) {
        this.setState({ schoolSubject })
        this.handleModal()
    }

    onDelete(schoolSubjectId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url + '/' + schoolSubjectId, schoolSubjectId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        schoolSubjects: [...this.state.schoolSubjects].filter(schoolSubject => schoolSubject.id !== schoolSubjectId)
                    })
                }
            })
    }

    handleCreate(schoolSubject) {
        RequestService.create(this.state.url, schoolSubject)
            .then(newSchoolSubject => {
            this.setState({
                schoolSubjects: [...this.state.schoolSubjects, newSchoolSubject],
                showModal: false
            })
        })
    }

    handleUpdate(schoolSubject) {
        RequestService.update(this.state.url + '/' + schoolSubject.id, schoolSubject)
            .then(updatedSchoolSubject => {
                this.setState({
                    schoolSubjects: [...this.state.schoolSubjects].map(schoolSubject => {
                        if (schoolSubject.id === updatedSchoolSubject.id) {
                            return updatedSchoolSubject
                        }
                        return schoolSubject
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
                <h1>{translate('school.subjects')}</h1>
                <CreateButton buttonText={translate('message.add.subject')} onCreate={this.onCreate}/>
                <SchoolSubjects 
                    schoolSubject={this.state.schoolSubject} 
                    schoolSubjects={this.state.schoolSubjects} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.schoolSubject.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(SchoolSubjectPage)