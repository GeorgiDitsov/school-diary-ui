import React, { useContext } from "react";
import LocalizationContext from "../../../contexts/localization-context";

export const GradeColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("grade")}</th>
      <th>{translate("inserted")}</th>
      <th>{translate("updated")}</th>
      <th>{translate("student")}</th>
      <th>{translate("school.subject")}</th>
      <th>{translate("teacher")}</th>
    </React.Fragment>
  );
};

export const GradeRow = ({ grade }) => (
  <tr>
    <td>{grade.id}</td>
    <td>{grade.value}</td>
    <td>{new Date(grade.createdAt).toLocaleString()}</td>
    <td>{new Date(grade.updatedAt).toLocaleString()}</td>
    <td>{grade.student.label}</td>
    <td>{grade.subject.label}</td>
    <td>{grade.teacher.label}</td>
  </tr>
);
