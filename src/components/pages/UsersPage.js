import React from "react";
import * as empty from "../../utils/empty-objects";
import { API_URL } from "../../utils/url";
import RequestService from "../../services/RequestService";
import Loading from "../Loading";
import Users from "../lists/Users";
import Pagination from "../Pagination";
import UpdateUser from "../../containers/UpdateUser";
import { withTranslation } from "react-i18next";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pages: 0,
      user: empty.user,
      users: [],
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    if (this.state.isLoading) this.setContent();
  }

  setContent() {
    RequestService.getData(
      `${API_URL}/v1/users?page=${this.state.activePage}`
    ).then(({ items, pages }) =>
      this.setState({
        users: items,
        pages,
        isLoading: false,
      })
    );
  }

  setActivePage(page) {
    this.setState({ activePage: page, isLoading: true });
  }

  onEdit(user) {
    this.setState({
      user,
    });
  }

  handleCloseModal() {
    this.setState({
      user: empty.user,
    });
  }

  handleUpdate(user) {
    if (RequestService.updateV2(`${API_URL}/v1/users/${user.id}`, user)) {
      this.setState({
        user: empty.user,
        isLoading: true,
      });
    }
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const { t: translate } = this.props;

    return (
      <React.Fragment>
        <h2 className="text-center mb-5">{translate("users")}</h2>
        <Users users={this.state.users} onEdit={this.onEdit} />
        <Pagination
          activePage={this.state.activePage}
          totalPages={this.state.pages}
          setActivePage={this.setActivePage}
        />
        {this.state.user.id && (
          <UpdateUser
            user={this.state.user}
            handleUpdate={this.handleUpdate}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(UsersPage);
