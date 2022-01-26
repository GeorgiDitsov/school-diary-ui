import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import { Button } from "react-bootstrap";

export const UserColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("email")}</th>
      <th>{translate("roles")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const UserRow = ({ user, onEdit }) => {
  const translate = useContext(LocalizationContext);

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.roles}</td>
      <td>
        <Button size="sm" variant="primary" onClick={() => onEdit(user)}>
          {translate("edit")}
        </Button>
      </td>
    </tr>
  );
};
