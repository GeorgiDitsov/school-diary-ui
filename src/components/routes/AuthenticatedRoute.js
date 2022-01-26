import React, { useContext } from "react";
import PrincipalContext from "../../contexts/principal-context";
import LocalizationContext from "../../contexts/localization-context";
import { Route, Redirect } from "react-router-dom";
import Header from "../header/Header";
import { Container } from "react-bootstrap";
import { LOGIN_PATH } from "../../utils/url";

export default function AuthenticatedRoute({ component: Component, ...rest }) {
  const principal = useContext(PrincipalContext);
  const translate = useContext(LocalizationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        principal ? (
          <React.Fragment>
            <Header principal={principal} translate={translate} />
            <Container className="justify-content-md-center my-5">
              <Component component={props.component} />
            </Container>
          </React.Fragment>
        ) : (
          <Redirect to={LOGIN_PATH} />
        )
      }
    />
  );
}
