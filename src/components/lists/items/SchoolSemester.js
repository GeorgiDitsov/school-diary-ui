import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const SchoolSemesterColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("begins")}</th>
      <th>{translate("ends")}</th>
      <th>{translate("year")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolSemesterRow = ({ schoolSemester, onEdit, onDelete }) => (
  <tr>
    <td>{schoolSemester.id}</td>
    <td>{schoolSemester.name}</td>
    <td>{schoolSemester.startDate}</td>
    <td>{schoolSemester.endDate}</td>
    <td>{schoolSemester.schoolYear.label}</td>
    <AdminOptions item={schoolSemester} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
