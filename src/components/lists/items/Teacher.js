import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";

export const TeacherColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("pin")}</th>
      <th>{translate("school.subjects")}</th>
      <th>{translate("user")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const TeacherRow = ({ teacher, onEdit, onDelete }) => (
  <tr>
    <td>{teacher.id}</td>
    <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
    <td>{teacher.pin}</td>
    <td>
      {teacher.subjects.map(
        (subject, index) =>
          `${subject.label}${teacher.subjects.length === index + 1 ? "" : ", "}`
      )}
    </td>
    <td>{teacher.username}</td>
    <AdminOptions item={teacher} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);
