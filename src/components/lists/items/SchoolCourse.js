import React, { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LocalizationContext from "../../../contexts/localization-context";
import PrincipalContext from "../../../contexts/principal-context";
import { ROLE_ADMIN, ROLE_TEACHER } from "../../../utils/constants";
import { MY_SCHOOL_COURSES_PATH } from "../../../utils/url";
import AdminOptions from "../../buttons/AdminOptions";
import BaseOptions from "../../buttons/BaseOptions";

export const SchoolCourseColumns = () => {
  const translate = useContext(LocalizationContext);
  const principal = useContext(PrincipalContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("school.subject")}</th>
      <th>{translate("class")}</th>
      {principal.roles.includes(ROLE_ADMIN) && <th>{translate("teacher")}</th>}
      <th>{translate("semester")}</th>
      {principal.roles.includes(ROLE_TEACHER) && (
        <th>{translate("Average")}</th>
      )}
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolCourseExtendedColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("id")}</th>
      <th>{translate("school.subject")}</th>
      <th>{translate("class")}</th>
      <th>{translate("semester")}</th>
      <th>{translate("Average")}</th>
      <th>{translate("actions")}</th>
    </React.Fragment>
  );
};

export const SchoolCourseSimpleColumns = () => {
  const translate = useContext(LocalizationContext);

  return (
    <React.Fragment>
      <th>{translate("school.subject")}</th>
      <th>{translate("teacher")}</th>
      <th>{translate("Average")}</th>
      <th style={{ width: "30%" }}>{translate("grades")}</th>
    </React.Fragment>
  );
};

export const SchoolCourseRow = ({ schoolCourse, onEdit, onDelete }) => (
  <tr>
    <td>{schoolCourse.id}</td>
    <td>{schoolCourse.subject.label}</td>
    <td>{schoolCourse.group.label}</td>
    <td>{schoolCourse.teacher.label}</td>
    <td>{schoolCourse.semester.label}</td>
    <AdminOptions item={schoolCourse} onEdit={onEdit} onDelete={onDelete} />
  </tr>
);

export const SchoolCourseExtendedRow = ({ schoolCourse }) => {
  const history = useHistory();

  return (
    <tr>
      <td>{schoolCourse.id}</td>
      <td>{schoolCourse.subject.label}</td>
      <td>{schoolCourse.group.label}</td>
      <td>{schoolCourse.semester.label}</td>
      <td>{schoolCourse.success || "-"}</td>
      <BaseOptions
        onClick={() =>
          history.push({
            pathname: `${MY_SCHOOL_COURSES_PATH}/${schoolCourse.id}/students`,
            state: schoolCourse,
          })
        }
      />
    </tr>
  );
};

export const SchoolCourseSimpleRow = ({ schoolCourse }) => (
  <tr>
    <td>{schoolCourse.subject.label}</td>
    <td>{schoolCourse.teacher.label}</td>
    <td>{schoolCourse.success || "-"}</td>
    <td>
      {schoolCourse.grades.map((grade, index) => (
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
          <span style={{ cursor: "default" }}>
            {`${grade.value}${
              schoolCourse.grades.length === index + 1 ? "" : ", "
            }`}
          </span>
        </OverlayTrigger>
      ))}
    </td>
  </tr>
);
