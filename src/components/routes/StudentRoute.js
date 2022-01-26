import React, { useContext } from "react";
import PrincipalContext from "../../contexts/principal-context";
import LocalizationContext from "../../contexts/localization-context";
import { Route } from "react-router-dom";
import { ROLE_STUDENT } from "../../utils/constants";
import Header from "../header/Header";
import { Container } from "react-bootstrap";
import UnauthorizedError from "../error/UnauthorizedError";

const StudentRoute = ({ component: Component, ...rest }) => {
  const principal = useContext(PrincipalContext);
  const translate = useContext(LocalizationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        principal?.roles?.includes(ROLE_STUDENT) ? (
          <React.Fragment>
            <Header principal={principal} translate={translate} />
            <Container className="justify-content-md-center my-5">
              <Component component={props.component} />
            </Container>
          </React.Fragment>
        ) : (
          <UnauthorizedError />
        )
      }
    />
  );
};

export default StudentRoute;
