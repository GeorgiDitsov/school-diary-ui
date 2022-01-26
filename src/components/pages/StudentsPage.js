import React from "react";
import * as empty from "../../utils/empty-objects";
import { API_URL } from "../../utils/url";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import Students from "../lists/Students";
import Pagination from "../Pagination";
import StudentContainer from "../../containers/StudentContainer";
import { withTranslation } from "react-i18next";

class StudentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      student: empty.student,
      students: [],
      groups: [],
      parents: [],
      showModal: false,
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.setContent();
    }
  }

  setContent() {
    Promise.all([
      RequestService.getData(
        `${API_URL}/v1/students?page=${this.state.activePage}`
      ),
      RequestService.getData(`${API_URL}/v1/school-groups`),
      RequestService.getData(`${API_URL}/v1/parents/options`),
    ]).then(([{ items, pages }, groups, parents]) =>
      this.setState({
        students: items,
        pages,
        groups,
        parents,
        isLoading: false,
      })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  onCreate() {
    this.setState({ student: empty.student });
    this.handleModal();
  }

  onEdit(student) {
    this.setState({ student });
    this.handleModal();
  }

  onDelete(studentId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/students/${studentId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleCreate(student) {
    if (RequestService.create(`${API_URL}/v1/students`, student)) {
      this.setState({
        student: empty.student,
        isLoading: true,
      });
    }

    this.handleModal();
  }

  handleUpdate(student) {
    if (
      RequestService.updateV2(`${API_URL}/v1/students/${student.id}`, student)
    ) {
      this.setState({
        student: empty.student,
        isLoading: true,
      });
    }

    this.handleModal();
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
        <h2 className="text-center mb-5">{translate("students")}</h2>
        <CreateButton onCreate={this.onCreate} />
        <Students
          students={this.state.students}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <StudentContainer
            student={this.state.student}
            groups={this.state.groups}
            parents={this.state.parents}
            handleModal={this.handleModal}
            handleSubmit={
              this.state.student.id ? this.handleUpdate : this.handleCreate
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(StudentsPage);
