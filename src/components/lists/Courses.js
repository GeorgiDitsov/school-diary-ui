import React from 'react'
import { API_URL, COURSES_PATH } from '../../utils/url'
import RequestService from '../../services/RequestService'
import Course from './items/Course'
import { Spinner } from 'react-bootstrap'
import List from '../List'

const API_COURSES_URL = API_URL + COURSES_PATH

class Courses extends React.Component {

    constructor() {
        super()
        this.state={
            course: {},
            courses: [],
            isLoading: true
        }
        this.setCourses = this.setCourses.bind(this)
    }

    componentDidMount() {
        RequestService.makeRequest(API_COURSES_URL).then(courses => {
            this.setCourses(courses)
            this.setState(prevState => {
                return {
                    course: courses[0],
                    isLoading: !(prevState.isLoading)
                }
            })
        })
    }

    setCourses(courses) {
        this.setState({
            courses: courses.map(course => <Course key={course.id} course={course}/>)
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner animation='border'/>
        }
        return (
            <List item={this.state.course} rows={this.state.courses}/>
        )
    }
}

export default Courses