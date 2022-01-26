import React from "react";
import * as empty from "../../utils/empty-objects";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import SchoolSubjects from "../lists/SchoolSubjects";
import SchoolSubjectContainer from "../../containers/SchoolSubjectContainer";
import { withTranslation } from "react-i18next";

class SchoolSubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolSubject: empty.schoolSubject,
      schoolSubjects: [],
      showModal: false,
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.buildSchoolSubject = this.buildSchoolSubject.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    RequestService.getData(`${API_URL}/v1/school-subjects`).then(
      (schoolSubjects) =>
        this.setState({
          schoolSubjects,
          isLoading: false,
        })
    );
  }

  onCreate() {
    this.setState({ schoolSubject: empty.schoolSubject });
    this.handleModal();
  }

  onEdit(schoolSubject) {
    this.setState({ schoolSubject });
    this.handleModal();
  }

  onDelete(schoolSubjectId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/school-subjects/${schoolSubjectId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleSave(schoolSubject) {
    const subject = this.buildSchoolSubject(schoolSubject);
    const save = schoolSubject.value
      ? RequestService.updateV2(
          `${API_URL}/v1/school-subjects/${schoolSubject.value}`,
          subject
        )
      : RequestService.create(`${API_URL}/v1/school-subjects`, subject);

    if (save)
      this.setState({ schoolSubject: empty.schoolSubject, isLoading: true });

    this.handleModal();
  }

  buildSchoolSubject(schoolSubject) {
    return schoolSubject ? { name: schoolSubject.label } : {};
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
        <h2 className="text-center mb-5">{translate("school.subjects")}</h2>
        <CreateButton
          buttonText={translate("message.add.subject")}
          onCreate={this.onCreate}
        />
        <SchoolSubjects
          schoolSubjects={this.state.schoolSubjects}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        {this.state.showModal && (
          <SchoolSubjectContainer
            schoolSubject={this.state.schoolSubject}
            handleModal={this.handleModal}
            handleSubmit={this.handleSave}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(SchoolSubjectPage);
