import React from 'react'
import { API_URL, SEMESTERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import Semester from './items/Semester'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_SEMESTERS_URL = API_URL + SEMESTERS_PATH

class Semesters extends React.Component {

    constructor() {
        super()
        this.state={
            semester: {},
            semesters: [],
            isLoading: true
        }
        this.setSemesters = this.setSemesters.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_SEMESTERS_URL).then(semesters => {
            this.setSemesters(semesters);
            this.setState(prevState => {
                return {
                    semester: semesters[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setSemesters(semesters) {
        this.setState({
            semesters: semesters.map(semester => <Semester key={semester.id} semester={semester}/>)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animatio='border'/>
        }
        return (
            <List item={this.state.semester} rows={this.state.semesters}/>
        )
    }
}

export default Semesters