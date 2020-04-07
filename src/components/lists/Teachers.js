import React from 'react'
import { API_URL, TEACHERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { TeacherRow, TeacherColumnNames } from './items/Teacher'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_TEACHERS_URL = API_URL + TEACHERS_PATH

class Teachers extends React.Component {

    constructor() {
        super()
        this.state={
            teacher: {},
            teachers: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const { t } = this.props
        RequestService.makeRequest(API_TEACHERS_URL).then(teachers => {
            this.setContent(t('teachers'), teachers)
        })
    }

    setContent(title, teachers) {
        this.setState(prevState => {
            return {
                title: title,
                teachers: teachers.map(teacher => (<TeacherRow key={teacher.id} teacher={teacher}/>)),
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
                <List columnNames={(<TeacherColumnNames/>)} rows={this.state.teachers}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Teachers)