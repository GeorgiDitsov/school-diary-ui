import React, { useContext, useState } from "react";
import LocalizationContext from "../contexts/localization-context";
import PrincipalContext from "../contexts/principal-context";
import { Container, Row, Jumbotron } from "react-bootstrap";

const Home = () => {
  const translate = useContext(LocalizationContext);
  const principal = useContext(PrincipalContext);

  const [title] = useState(
    translate("message.welcome", { username: principal.username })
  );

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Jumbotron>
          <h1>{title}</h1>
        </Jumbotron>
      </Row>
    </Container>
  );
};

export default Home;
