import React from 'react'
import * as empty from '../../utils/empty-objects'
import RequestService from '../../services/RequestService'
import { API_URL, COURSES_PATH } from '../../utils/url'
import { Spinner } from 'react-bootstrap'
import { CourseColumnNames, CourseViewModelRow } from '../lists/items/Course'
import List from '../List'

class TeacherCoursesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teacher: empty.teacher,
            courses: [],
            url: API_URL + '/teacher' + COURSES_PATH,
            isLoading: true
        }
    }

    componentDidMount() {
        RequestService.getData(this.state.url)
            .then(response => {
                this.setState({
                    teacher: response.teacher,
                    courses: response.courses,
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
                <h1>{this.state.teacher.name + ', ' + this.state.teacher.pin}</h1>
                <List 
                    columnNames={<CourseColumnNames/>} 
                    rows={this.state.courses.map(course => <CourseViewModelRow course={course}/>)}
                />
            </React.Fragment>
        )
    }
}

export default TeacherCoursesPage