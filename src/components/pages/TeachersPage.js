import React from 'react'
import RequestService from '../../services/RequestService'
import { API_URL, TEACHERS_PATH } from '../../utils/url'
import { Spinner, Row } from 'react-bootstrap'
import Teachers from '../lists/Teachers'
import { withTranslation } from 'react-i18next'

class TeachersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: {},
            teachers: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        this.setContent()
    }
    
    setContent() {
        const { t: translate } = this.props
        RequestService.getData(API_URL + TEACHERS_PATH)
            .then(teachers => {
                this.setState({
                    title: translate('teachers'),
                    teachers,
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
                <Row className='justify-content-md-center'>
                    <h1>{this.state.title}</h1>
                </Row>
                <Teachers teacher={this.state.teacher} teachers={this.state.teachers}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(TeachersPage)