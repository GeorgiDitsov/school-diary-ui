import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const SchoolGroupColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("class")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolGroupRow = ({ schoolGroup, onEdit, onDelete }) => (
  <tr>
    <td>{schoolGroup.value}</td>
    <td>{schoolGroup.label}</td>
    <AdminOptions item={schoolGroup} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
