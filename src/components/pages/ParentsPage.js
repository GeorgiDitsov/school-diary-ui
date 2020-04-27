import React from 'react'
import * as empty from '../../utils/empty-objects'
import { API_URL, PARENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner } from 'react-bootstrap'
import CreateButton from '../buttons/CreateButton'
import Parents from '../lists/Parents'
import { withTranslation } from 'react-i18next'

class ParentsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            parent: empty.parent,
            parents: [],
            url: API_URL + PARENTS_PATH,
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
            .then(parents => {
                this.setState({
                    parents,
                    isLoading: false
                })
            })
    }

    onCreate() {
        this.setState({ parent: empty.parent })
        this.handleModal()
    }

    onEdit(parent) {
        this.setState({ parent })
        this.handleModal()
    }

    onDelete(parentId) {
        const { t: translate } = this.props
        window.confirm(translate('message.confirm')) &&
        RequestService.delete(this.state.url + '/' + parentId, parentId)
            .then(isSuccessful => {
                if (isSuccessful) {
                    this.setState({
                        parents: [...this.state.parents].filter(parent => parent.id !== parentId)
                    })
                }
            })
    }

    handleCreate(parent) {
        RequestService.create(this.state.url, parent)
            .then(newParent => {
            this.setState({
                parents: [...this.state.parents, newParent],
                showModal: false                
            })
        })
    }

    handleUpdate(parent) {
        RequestService.update(this.state.url + '/' + parent.id, parent)
            .then(updatedParent => {
                this.setState({
                    parents: [...this.state.parents].map(parent => {
                        if (parent.id === updatedParent.id) {
                            return updatedParent
                        }
                        return parent
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
                <h1>{translate('parents')}</h1>
                <CreateButton buttonText={translate('message.add.parent')} onCreate={this.onCreate}/>
                <Parents 
                    parent={this.state.parent} 
                    parents={this.state.parents} 
                    showModal={this.state.showModal} 
                    onEdit={this.onEdit} 
                    onDelete={this.onDelete} 
                    handleSubmit={this.state.parent.id ? this.handleUpdate : this.handleCreate} 
                    handleModal={this.handleModal}
                />
            </React.Fragment>
        )
    }
}

export default withTranslation()(ParentsPage)