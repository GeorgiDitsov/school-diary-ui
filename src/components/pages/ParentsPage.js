import React from 'react'
import { API_URL, PARENTS_PATH } from '../../utils/url'
import { withTranslation } from 'react-i18next'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import Parents from '../lists/Parents'

class ParentsPage extends React.Component {
    
    constructor() {
        super()
        this.state={
            title: '',
            parent: {},
            parents: [],
            url: API_URL + PARENTS_PATH,
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }

    setContent() {
        const { t } = this.props
        RequestService.getData(this.state.url)
            .then(parents => {
                this.setState({
                    title: t('parents'),
                    parents,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{this.state.title}</h1></Row>
                <Parents parent={this.state.parent} parents={this.state.parents}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(ParentsPage)