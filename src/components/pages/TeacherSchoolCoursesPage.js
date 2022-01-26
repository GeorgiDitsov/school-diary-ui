import React from "react";
import * as empty from "../../utils/empty-objects";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import {
  SchoolCourseColumns,
  SchoolCourseExtendedRow,
} from "../lists/items/SchoolCourse";
import List from "../List";
import PrincipalContext from "../../contexts/principal-context";

class TeacherSchoolCoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: empty.teacher,
      schoolCourses: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const principal = this.context;

    RequestService.getData(`${API_URL}/v1/people?userId=${principal.id}`).then(
      (people) =>
        RequestService.getData(`${API_URL}/v1/school-semesters/current`).then(
          (schoolSemester) => {
            const teacher = people[0];
            RequestService.getData(
              `${API_URL}/v1/teachers/${teacher.id}/school-courses?schoolSemesterId=${schoolSemester.value}`
            ).then((schoolCourses) =>
              this.setState({
                teacher,
                schoolCourses,
                isLoading: false,
              })
            );
          }
        )
    );
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    return (
      <React.Fragment>
        <h2 className="text-center mb-5">{`${this.state.teacher.firstName} ${this.state.teacher.lastName}'s courses`}</h2>
        <List
          columns={<SchoolCourseColumns />}
          rows={this.state.schoolCourses.map((schoolCourse, index) => (
            <SchoolCourseExtendedRow key={index} schoolCourse={schoolCourse} />
          ))}
        />
      </React.Fragment>
    );
  }
}

TeacherSchoolCoursesPage.contextType = PrincipalContext;

export default TeacherSchoolCoursesPage;
