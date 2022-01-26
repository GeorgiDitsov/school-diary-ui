import React from "react";
import * as empty from "../../utils/empty-objects";
import { API_URL } from "../../utils/url";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import CreateButton from "../buttons/CreateButton";
import Parents from "../lists/Parents";
import Pagination from "../Pagination";
import ParentContainer from "../../containers/ParentContainer";
import { withTranslation } from "react-i18next";

class ParentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      parent: empty.parent,
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
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    RequestService.getData(
      `${API_URL}/v1/parents?page=${this.state.activePage}`
    ).then(({ items, pages }) => {
      this.setState({
        parents: items,
        pages,
        isLoading: false,
      });
    });
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  onCreate() {
    this.setState({ parent: empty.parent });
    this.handleModal();
  }

  onEdit(parent) {
    this.setState({ parent });
    this.handleModal();
  }

  onDelete(parentId) {
    const { t: translate } = this.props;

    if (
      window.confirm(translate("message.confirm")) &&
      RequestService.delete(`${API_URL}/v1/parents/${parentId}`)
    ) {
      this.setState({ isLoading: true });
    }
  }

  handleCreate(parent) {
    if (RequestService.create(`${API_URL}/v1/parents`, parent)) {
      this.setState({ parent: empty.parent, isLoading: true });
    }

    this.handleModal();
  }

  handleUpdate(parent) {
    if (RequestService.updateV2(`${API_URL}/v1/parents/${parent.id}`, parent)) {
      this.setState({ parent: empty.parent, isLoading: true });
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
        <h2 className="text-center mb-5">{translate("parents")}</h2>
        <CreateButton
          buttonText={translate("message.add.parent")}
          onCreate={this.onCreate}
        />
        <Parents
          parents={this.state.parents}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.showModal && (
          <ParentContainer
            parent={this.state.parent}
            handleModal={this.handleModal}
            handleSubmit={
              this.state.parent.id ? this.handleUpdate : this.handleCreate
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(ParentsPage);
