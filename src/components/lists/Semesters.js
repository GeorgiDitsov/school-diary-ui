import React from 'react'
import { API_URL, SEMESTERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import { SemesterRow, SemesterColumnNames } from './items/Semester'
import { Spinner } from 'react-bootstrap'
import List from '../List'
import { withTranslation } from 'react-i18next'

const API_SEMESTERS_URL = API_URL + SEMESTERS_PATH

class Semesters extends React.Component {

    constructor() {
        super()
        this.state={
            title: '',
            semesters: [],
            isLoading: true
        }
        this.setContent = this.setContent.bind(this)
    }

    componentDidMount() {
        const {t} = this.props
        RequestService.makeRequest(API_SEMESTERS_URL).then(semesters => {
            this.setContent(t('semesters'), semesters);
        })
    }

    setContent(title, semesters) {
        this.setState(prevState => {
            return {
                title: title,
                semesters: semesters.map(semester => <SemesterRow key={semester.id} semester={semester}/>),
                isLoading: !(prevState.isLoading)
            }
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animatio='border'/>
        }
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <List columnNames={(<SemesterColumnNames/>)} rows={this.state.semesters}/>
            </React.Fragment>
        )
    }
}

export default withTranslation()(Semesters)