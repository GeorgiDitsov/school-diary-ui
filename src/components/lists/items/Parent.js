import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const ParentColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("pin")}</th>
      <th>{translate("user")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const ParentRow = ({ parent, onEdit, onDelete }) => (
  <tr>
    <td>{parent.id}</td>
    <td>{`${parent.firstName} ${parent.lastName}`}</td>
    <td>{parent.pin}</td>
    <td>{parent.username}</td>
    <AdminOptions item={parent} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
