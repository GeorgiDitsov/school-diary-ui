import React from "react";
import * as empty from "../../utils/empty-objects";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import SchoolCourses from "../lists/SchoolCourses";
import CreateButton from "../buttons/CreateButton";
import { withTranslation } from "react-i18next";
import { API_URL } from "../../utils/url";
import Pagination from "../Pagination";
import SchoolCourseContainer from "../../containers/SchoolCourseContainer";

class SchoolCoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      schoolCourse: empty.schoolCourse,
      schoolCourses: [],
      schoolGroups: [],
      schoolSubjects: [],
      teachers: [],
      schoolSemesters: [],
      showModal: false,
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    Promise.all([
      RequestService.getData(`${API_URL}/v1/school-courses`),
      RequestService.getData(`${API_URL}/v1/school-groups`),
      RequestService.getData(`${API_URL}/v1/school-subjects`),
      RequestService.getData(`${API_URL}/v1/teachers/options`),
      RequestService.getData(`${API_URL}/v1/school-semesters/options`),
    ]).then(
      ([
        { items, pages },
        schoolGroups,
        schoolSubjects,
        teachers,
        schoolSemesters,
      ]) =>
        this.setState({
          schoolCourses: items,
          pages,
          schoolGroups,
          schoolSubjects,
          teachers,
          schoolSemesters,
          isLoading: false,
        })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page });
  }

  onCreate() {
    this.setState({ schoolCourse: empty.schoolCourse });
    this.handleModal();
  }

  onEdit(schoolCourse) {
    this.setState({ schoolCourse });
    this.handleModal();
  }

  onDelete(schoolCourseId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/school-courses/${schoolCourseId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleSave(schoolCourse) {
    const save = schoolCourse.id
      ? RequestService.updateV2(
          `${API_URL}/v1/school-courses/${schoolCourse.id}`,
          schoolCourse
        )
      : RequestService.create(`${API_URL}/v1/school-courses`, schoolCourse);

    if (save) {
      this.setState({
        schoolCourse: empty.schoolCourse,
        showModal: false,
        isLoading: true,
      });
    }
  }

  handleModal() {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const { t: translate } = this.props;

    return (
      <React.Fragment>
        <h2 className="text-center mb-5">{translate("courses")}</h2>
        <CreateButton
          buttonText={translate("message.add.course")}
          onCreate={this.onCreate}
        />
        <SchoolCourses
          schoolCourses={this.state.schoolCourses}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <SchoolCourseContainer
            schoolCourse={this.state.schoolCourse}
            schoolGroups={this.state.schoolGroups}
            schoolSubjects={this.state.schoolSubjects}
            teachers={this.state.teachers}
            schoolSemesters={this.state.schoolSemesters}
            handleModal={this.handleModal}
            handleSubmit={this.handleSave}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(SchoolCoursesPage);
