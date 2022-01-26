import React from "react";
import * as empty from "../../utils/empty-objects";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import SchoolGroups from "../lists/SchoolGroups";
import { withTranslation } from "react-i18next";
import SchoolGroupContainer from "../../containers/SchoolGroupContainer";

class SchoolGroupsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolGroup: empty.schoolGroup,
      schoolGroups: [],
      showModal: false,
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.buildSchoolGroup = this.buildSchoolGroup.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    RequestService.getData(`${API_URL}/v1/school-groups`).then((schoolGroups) =>
      this.setState({
        schoolGroups,
        isLoading: false,
      })
    );
  }

  onCreate() {
    this.setState({ schoolGroup: empty.schoolGroup });
    this.handleModal();
  }

  onEdit(schoolGroup) {
    this.setState({ schoolGroup });
    this.handleModal();
  }

  onDelete(groupId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/school-groups/${groupId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleSave(schoolGroup) {
    const group = this.buildSchoolGroup(schoolGroup);
    const save = schoolGroup.value
      ? RequestService.updateV2(
          `${API_URL}/v1/school-groups/${schoolGroup.value}`,
          group
        )
      : RequestService.create(`${API_URL}/v1/school-groups`, group);

    if (save)
      this.setState({ schoolGroup: empty.schoolGroup, isLoading: true });

    this.handleModal();
  }

  buildSchoolGroup(schoolGroup) {
    return schoolGroup
      ? {
          year: Number(
            schoolGroup.label.substring(0, schoolGroup.label.length - 1)
          ),
          index: schoolGroup.label.slice(-1),
        }
      : {};
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
        <h2 className="text-center mb-5">{translate("classes")}</h2>
        <CreateButton
          buttonText={translate("message.add.class")}
          onCreate={this.onCreate}
        />
        <SchoolGroups
          schoolGroups={this.state.schoolGroups}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        {this.state.showModal && (
          <SchoolGroupContainer
            schoolGroup={this.state.schoolGroup}
            handleSubmit={this.handleSave}
            handleModal={this.handleModal}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(SchoolGroupsPage);
