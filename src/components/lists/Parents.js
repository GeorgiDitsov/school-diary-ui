import React from 'react'
import { API_URL, PARENTS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { ParentRow, ParentColumnNames } from './items/Parent'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_PARENTS_URL = API_URL + PARENTS_PATH

class Parents extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            parents: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_PARENTS_URL)
            .then(parents => {
                this.setContent(t('parents'), parents)
            })
    }
    
    setContent(title, parents) {
        this.setState(prevState => {
            return {
                title: title,
                parents: parents.map(parent => (<ParentRow key={parent.id} parent={parent}/>)),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List columnNames={(<ParentColumnNames/>)} rows={this.state.parents}/>
            </React.Fragment>
        )
    }
}

export default  withTranslation()(Parents)