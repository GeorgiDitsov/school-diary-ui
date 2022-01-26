import React from "react";
import RequestService from "../../services/RequestService";
import { API_URL } from "../../utils/url";
import Loading from "../Loading";
import Children from "../lists/Children";
import { withTranslation } from "react-i18next";

class ChildrenPage extends React.Component {
  constructor() {
    super();
    this.state = {
      children: [],
      isLoading: true,
    };
    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  setContent() {
    RequestService.getData(`${API_URL}/v1/children`).then((children) => {
      this.setState((prevState) => {
        return {
          children,
          isLoading: !prevState.isLoading,
        };
      });
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const { t: translate } = this.props;

    return (
      <React.Fragment>
        <h2 className="text-center mb-5">{translate("children")}</h2>
        <Children children={this.state.children} />
      </React.Fragment>
    );
  }
}

export default withTranslation()(ChildrenPage);
