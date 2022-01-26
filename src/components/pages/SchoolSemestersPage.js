import React from "react";
import * as empty from "../../utils/empty-objects";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import SchoolSemesters from "../lists/SchoolSemesters";
import Pagination from "../Pagination";
import SchoolSemesterContainer from "../../containers/SchoolSemesterContainer";
import { withTranslation } from "react-i18next";

class SchoolSemestersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      schoolSemester: empty.schoolSemester,
      schoolSemesters: [],
      schoolYears: [],
      showModal: false,
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.buildSchoolSemester = this.buildSchoolSemester.bind(this);
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
      RequestService.getData(`${API_URL}/v1/school-semesters`),
      RequestService.getData(`${API_URL}/v1/school-years/options`),
    ]).then(([{ items, pages }, schoolYears]) =>
      this.setState({
        schoolSemesters: items,
        pages,
        schoolYears,
        isLoading: false,
      })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page });
  }

  onCreate() {
    this.setState({ schoolSemester: empty.schoolSemester });
    this.handleModal();
  }

  onEdit(schoolSemester) {
    this.setState({ schoolSemester });
    this.handleModal();
  }

  onDelete(schoolSemesterId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(
        `${API_URL}/v1/school-semesters/${schoolSemesterId}`
      )
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleSave(schoolSemester) {
    const semester = this.buildSchoolSemester(schoolSemester);
    const save = schoolSemester.id
      ? RequestService.updateV2(
          `${API_URL}/v1/school-semesters/${schoolSemester.id}`,
          semester
        )
      : RequestService.create(`${API_URL}/v1/school-semesters`, semester);

    if (save) {
      this.setState({
        schoolSemester: empty.schoolSemester,
        showModal: false,
        isLoading: true,
      });
    }
  }

  buildSchoolSemester(schoolSemester) {
    return {
      id: schoolSemester.id,
      name: schoolSemester.name,
      period: {
        startDate: schoolSemester.startDate,
        endDate: schoolSemester.endDate,
      },
      schoolYear: schoolSemester.schoolYear,
    };
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
        <h2 className="text-center mb-5">{translate("semesters")}</h2>
        <CreateButton
          buttonText={translate("message.add.semester")}
          onCreate={this.onCreate}
        />
        <SchoolSemesters
          schoolSemesters={this.state.schoolSemesters}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <SchoolSemesterContainer
            schoolSemester={this.state.schoolSemester}
            schoolYears={this.state.schoolYears}
            handleModal={this.handleModal}
            handleSubmit={this.handleSave}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(SchoolSemestersPage);
