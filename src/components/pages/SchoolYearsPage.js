import React from "react";
import * as empty from "../../utils/empty-objects";
import { API_URL } from "../../utils/url";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import SchoolYears from "../lists/SchoolYears";
import Pagination from "../Pagination";
import SchoolYearContainer from "../../containers/SchoolYearContainer";
import { withTranslation } from "react-i18next";

class SchoolYearsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      schoolYear: empty.schoolYear,
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
    this.buildSchoolYear = this.buildSchoolYear.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    RequestService.getData(
      `${API_URL}/v1/school-years?page=${this.state.activePage}`
    ).then(({ items, pages }) =>
      this.setState({
        schoolYears: items,
        pages,
        isLoading: false,
      })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  onCreate() {
    this.setState({ schoolYear: empty.schoolYear });
    this.handleModal();
  }

  onEdit(schoolYear) {
    this.setState({ schoolYear });
    this.handleModal();
  }

  onDelete(schoolYearId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/school-years/${schoolYearId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleSave(schoolYear) {
    const year = this.buildSchoolYear(schoolYear);
    const save = schoolYear.id
      ? RequestService.updateV2(
          `${API_URL}/v1/school-years/${schoolYear.id}`,
          year
        )
      : RequestService.create(`${API_URL}/v1/school-years`, year);

    if (save) {
      this.setState({
        schoolYear: empty.schoolYear,
        showModal: false,
        isLoading: true,
      });
    }
  }

  buildSchoolYear(schoolYear) {
    return {
      id: schoolYear.id,
      name: schoolYear.name,
      period: {
        startDate: schoolYear.startDate,
        endDate: schoolYear.endDate,
      },
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
        <h2 className="text-center mb-5">{translate("years")}</h2>
        <CreateButton onCreate={this.onCreate} />
        <SchoolYears
          schoolYears={this.state.schoolYears}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <SchoolYearContainer
            schoolYear={this.state.schoolYear}
            handleModal={this.handleModal}
            handleSubmit={this.handleSave}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(SchoolYearsPage);
