import React from "react";
import * as empty from "../../utils/empty-objects";
import { API_URL } from "../../utils/url";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import Teachers from "../lists/Teachers";
import Pagination from "../Pagination";
import TeacherContainer from "../../containers/TeacherContainer";
import { withTranslation } from "react-i18next";

class TeachersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      teacher: empty.teacher,
      teachers: [],
      schoolSubjects: [],
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
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    Promise.all([
      RequestService.getData(
        `${API_URL}/v1/teachers?page=${this.state.activePage}`
      ),
      RequestService.getData(`${API_URL}/v1/school-subjects`),
    ]).then(([{ items, pages }, schoolSubjects]) =>
      this.setState({
        teachers: items,
        pages,
        schoolSubjects,
        isLoading: false,
      })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  onCreate() {
    this.setState({ teacher: empty.teacher });
    this.handleModal();
  }

  onEdit(teacher) {
    this.setState({ teacher });
    this.handleModal();
  }

  onDelete(teacherId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/teachers/${teacherId}`, teacherId)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleCreate(teacher) {
    if (RequestService.create(`${API_URL}/v1/teachers`, teacher)) {
      this.setState({ teacher: empty.teacher, isLoading: true });
    }

    this.handleModal();
  }

  handleUpdate(teacher) {
    if (
      RequestService.updateV2(`${API_URL}/v1/teachers/${teacher.id}`, teacher)
    ) {
      this.setState({ teacher: empty.teacher, isLoading: true });
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
        <h2 className="text-center mb-5">{translate("teachers")}</h2>
        <CreateButton
          buttonText={translate("message.add.teacher")}
          onCreate={this.onCreate}
        />
        <Teachers
          teachers={this.state.teachers}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <TeacherContainer
            teacher={this.state.teacher}
            schoolSubjects={this.state.schoolSubjects}
            handleModal={this.handleModal}
            handleSubmit={
              this.state.teacher.id ? this.handleUpdate : this.handleCreate
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(TeachersPage);
