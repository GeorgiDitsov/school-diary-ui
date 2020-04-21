import React from 'react'
import { API_URL, SEMESTERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import { withTranslation } from 'react-i18next'
import Semesters from '../lists/Semesters'

class SemestersPage extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            semester: {},
            semesters: [],
            url: API_URL + SEMESTERS_PATH,
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
            .then(semesters => {
                this.setState({
                    title: t('semesters'),
                    semesters,
                    isLoading: false
                })
            })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{this.state.title}</h1></Row>
                <Semesters semester={this.state.semester} semesters={this.state.semesters}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(SemestersPage)