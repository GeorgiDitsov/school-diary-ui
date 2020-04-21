import React from 'react'
import { API_URL, COURSES_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { Spinner, Row } from 'react-bootstrap'
import Courses from '../lists/Courses'
import { withTranslation } from 'react-i18next'

class CoursesPage extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            course: {},
            courses: [],
            url: API_URL + COURSES_PATH,
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
            .then(courses => {
                this.setState({
                    title: t('courses'),
                    courses,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return(
            <React.Fragment>
                <Row className='justify-content-md-center'><h1>{this.state.title}</h1></Row>
                <Courses course={this.state.course} courses={this.state.courses}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(CoursesPage)