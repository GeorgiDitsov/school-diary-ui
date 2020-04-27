import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, SEMESTERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import Semesters from '../lists/Semesters'
import { withTranslation } from 'react-i18next'

class SemestersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            semester: empty.semester,
            semesters: [],
            url: API_URL + SEMESTERS_PATH,
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
            .then(semesters => {
                this.setState({
                    semesters,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ semester: empty.semester })
        this.handleModal()
    }

    onEdit(semester) {
        this.setState({ semester })
        this.handleModal()
    }

    onDelete(semesterId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url + '/' + semesterId, semesterId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        semesters: [...this.state.semesters].filter(semester => semester.id !== semesterId)
                    })
                }
            })
    }

    handleCreate(semester) {
        RequestService.create(this.state.url, semester)
            .then(newSemester => {
            this.setState({
                semesters: [...this.state.semesters, newSemester],
                showModal: false
            })
        })
    }

    handleUpdate(semester) {
        RequestService.update(this.state.url + '/' + semester.id, semester)
            .then(updatedSemester => {
                this.setState({
                    semesters: [...this.state.semesters].map(semester => {
                        if (semester.id === updatedSemester.id) {
                            return updatedSemester
                        }
                        return semester
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
                <h1>{translate('semesters')}</h1>
                <CreateButton buttonText={translate('message.add.semester')} onCreate={this.onCreate}/>
                <Semesters 
                    semester={this.state.semester} 
                    semesters={this.state.semesters} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.semester.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(SemestersPage)