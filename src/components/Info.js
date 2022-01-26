import React, { useContext, useState } from "react";
import PrincipalContext from "../contexts/principal-context";
import LocalizationContext from "../contexts/localization-context";
import { Jumbotron } from "react-bootstrap";

const Info = () => {
  const principal = useContext(PrincipalContext);
  const translate = useContext(LocalizationContext);

  const [username] = useState(
    `${translate("username")}: ${principal.username}`
  );
  const [role] = useState(`${translate("roles")}: ` + principal.roles);

  return (
    <Jumbotron>
      <h3>{username}</h3>
      <h3>{role}</h3>
    </Jumbotron>
  );
};

export default Info;
