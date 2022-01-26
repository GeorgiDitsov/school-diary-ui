import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import PrincipalContext from "../../contexts/principal-context";
import { HOME_PATH } from "../../utils/url";

export default function PublicRoute({ component: Component, ...rest }) {
  const principal = useContext(PrincipalContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        principal ? (
          <Redirect to={HOME_PATH} />
        ) : (
          <Container className="justify-content-md-center my-5">
            <Component component={props.component} />
          </Container>
        )
      }
    />
  );
}
