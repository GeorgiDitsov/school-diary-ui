import React from 'react'
import { API_URL, TEACHERS_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import Teacher from './items/Teacher'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_TEACHERS_URL = API_URL + TEACHERS_PATH

class Teachers extends React.Component {

    constructor() {
        super()
        this.state={
            teacher: {},
            teachers: [],
            isLoading: true
        }
        this.setTeachers = this.setTeachers.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_TEACHERS_URL).then(teachers => {
            this.setTeachers(teachers)
            this.setState(prevState => {
                return {
                    teacher: teachers[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setTeachers(teachers) {
        this.setState({
            teachers: teachers.map(teacher => (<Teacher key={teacher.id} teacher={teacher}/>))
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.teacher} rows={this.state.teachers}/>
        )
    }
}

export default Teachers