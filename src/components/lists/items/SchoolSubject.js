import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const SchoolSubjectColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("school.subject")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolSubjectRow = ({ schoolSubject, onEdit, onDelete }) => (
  <tr>
    <td>{schoolSubject.value}</td>
    <td>{schoolSubject.label}</td>
    <AdminOptions item={schoolSubject} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
