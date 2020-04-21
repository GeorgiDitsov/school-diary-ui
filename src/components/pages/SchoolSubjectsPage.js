import React from 'react'
import RequestService from '../../services/RequestService'
import { API_URL, SCHOOL_SUBJECTS_PATH } from '../../utils/url'
import { withTranslation } from 'react-i18next'
import { Spinner, Row } from 'react-bootstrap'
import SchoolSubjects from '../lists/SchoolSubjects'

class SchoolSubjectPage extends React.Component {

    constructor(){
        super()
        this.state={
            title: '',
            schoolSubject: {},
            schoolSubjects: [],
            url: API_URL + SCHOOL_SUBJECTS_PATH,
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
            .then(schoolSubjects => {
                this.setState({
                    title: t('school.subjects'),
                    schoolSubjects,
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
                <SchoolSubjects schoolSubject={this.state.schoolSubject} schoolSubjects={this.state.schoolSubjects}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(SchoolSubjectPage)