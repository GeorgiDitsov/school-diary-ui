import React from "react";
import * as empty from "../../utils/empty-objects";
import {
  API_URL,
  GRADES_PATH,
  STUDENTS_PATH,
  COURSES_PATH,
} from "../../utils/url";
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER } from "../../utils/constants";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import Grades from "../lists/Grades";
import Pagination from "../Pagination";
import PrincipalContext from "../../contexts/principal-context";
import { withTranslation } from "react-i18next";

class GradesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      title: "",
      grade: empty.grade,
      grades: [],
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
  }

  componentDidMount() {
    const roles = this.context.roles;

    roles.includes(ROLE_ADMIN) && this.adminRequest();
    roles.includes(ROLE_STUDENT) && this.userRequest(`${API_URL}/v1/grades`);
    roles.includes(ROLE_TEACHER) &&
      this.userRequest(
        API_URL +
          COURSES_PATH +
          "/" +
          this.props.match.params.courseId +
          STUDENTS_PATH +
          "/" +
          this.props.match.params.studentId +
          GRADES_PATH
      );
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.adminRequest();
  }

  setContent(title, grades, pages) {
    this.setState({
      title,
      grades,
      pages,
      isLoading: false,
    });
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  adminRequest() {
    const { t: translate } = this.props;

    RequestService.getData(
      `${API_URL}/v1/grades/by-pages?page=${this.state.activePage}`
    ).then(({ items, pages }) =>
      this.setContent(translate("grades"), items, pages)
    );
  }

  userRequest(url) {
    RequestService.getData(url).then((response) => {
      const title =
        response.student.name +
        ", " +
        response.student.pin +
        ", " +
        response.student.groupOfStudents.view;
      this.setContent(title, response.grades);
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    return (
      <React.Fragment>
        <h2 className="text-center mb-5">{this.state.title}</h2>
        <Grades grade={this.state.grade} grades={this.state.grades} />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
      </React.Fragment>
    );
  }
}

GradesPage.contextType = PrincipalContext;

export default withTranslation()(GradesPage);
