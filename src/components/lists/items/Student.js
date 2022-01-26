import React, { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import LocalizationContext from "../../../contexts/localization-context";
import AdminOptions from "../../buttons/AdminOptions";
import CreateButton from "../../buttons/CreateButton";

export const StudentColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("name")}</th>
      <th>{translate("pin")}</th>
      <th>{translate("class")}</th>
      <th>{translate("parents")}</th>
      <th>{translate("user")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const StudentAndGradesColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("student")}</th>
      <th>{translate("Average")}</th>
      <th style={{ width: "30%" }}>{translate("grades")}</th>
    </React.Fragment>
  );
};

export const StudentRow = ({ student, onEdit, onDelete }) => (
  <tr>
    <td>{student.id}</td>
    <td>{`${student.firstName} ${student.lastName}`}</td>
    <td>{student.pin}</td>
    <td>{student.group?.label || "n/a"}</td>
    <td>
      {student.parents.map((parent, index) => (
        <div key={index}>{parent.label}</div>
      ))}
    </td>
    <td>{student.username}</td>
    <AdminOptions item={student} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);

export const StudentAndGradesRow = ({ student, onCreate, onEdit }) => (
  <tr>
    <td>{student.value}</td>
    <td>{student.label}</td>
    <td>{student.averageGrade}</td>
    <td>
      {student.grades.map((grade, index) => (
        <OverlayTrigger
          key={index}
          placement={"top"}
          overlay={
            <Tooltip>
              {`${grade.teacher.label} ${new Date(
                grade.updatedAt
              ).toLocaleString()}`}
            </Tooltip>
          }
        >
          <span style={{ cursor: "pointer" }} onClick={() => onEdit(grade)}>
            {`${grade.value}${student.grades.length === index + 1 ? "" : ", "}`}
          </span>
        </OverlayTrigger>
      ))}
      <CreateButton onCreate={() => onCreate(student)} />
    </td>
  </tr>
);
