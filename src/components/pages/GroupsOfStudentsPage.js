import React from 'react'
import * as empty from '../../utils/empty-objects'
import RequestService from '../../services/RequestService'
import { API_URL, GROUPS_OF_STUDENTS_PATH } from '../../utils/url'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import GroupsOfStudents from '../lists/GroupsOfStudents'
import { withTranslation } from 'react-i18next'

class GroupsOfStudentsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            groupOfStudents: empty.groupOfStudents,
            groupsOfStudents: [],
            url: API_URL + GROUPS_OF_STUDENTS_PATH,
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
            .then(groupsOfStudents => {
                this.setState({
                    groupsOfStudents,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ groupOfStudents: empty.groupOfStudents })
        this.handleModal()
    }

    onEdit(groupOfStudents) {
        this.setState({ groupOfStudents })
        this.handleModal()
    }

    onDelete(groupOfStudentsId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url + '/' + groupOfStudentsId, groupOfStudentsId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        groupsOfStudents: [...this.state.groupsOfStudents]
                            .filter(groupOfStudents => groupOfStudents.id !== groupOfStudentsId)
                    })
                }
            })
    }

    handleCreate(groupOfStudents) {
        RequestService.create(this.state.url, groupOfStudents)
            .then(newGroupOfStudents => {
            this.setState({
                groupsOfStudents: [...this.state.groupsOfStudents, newGroupOfStudents],
                showModal: false
            })
        })
    }

    handleUpdate(groupOfStudents) {
        RequestService.update(this.state.url + '/' + groupOfStudents.id, groupOfStudents)
            .then(updatedGroupOfStudents => {
                this.setState({
                    groupsOfStudents: [...this.state.groupsOfStudents].map(groupOfStudents => {
                        if (groupOfStudents.id === updatedGroupOfStudents.id) {
                            return updatedGroupOfStudents
                        }
                        return groupOfStudents
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
                <h1>{translate('classes')}</h1>
                <CreateButton buttonText={translate('message.add.class')} onCreate={this.onCreate}/>
                <GroupsOfStudents 
                    groupOfStudents={this.state.groupOfStudents} 
                    groupsOfStudents={this.state.groupsOfStudents} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.groupOfStudents.id ? this.handleUpdate: this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(GroupsOfStudentsPage)