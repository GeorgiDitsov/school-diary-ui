import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const SchoolYearColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("begins")}</th>
      <th>{translate("ends")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolYearRow = ({ schoolYear, onEdit, onDelete }) => (
  <tr>
    <td>{schoolYear.id}</td>
    <td>{schoolYear.name}</td>
    <td>{schoolYear.startDate}</td>
    <td>{schoolYear.endDate}</td>
    <AdminOptions item={schoolYear} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
