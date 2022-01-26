import React from "react";
import LocalizationContext from "../../../contexts/localization-context";
import { Nav } from "react-bootstrap";
import {
  CUSTOMERS_PATH,
  STUDENTS_PATH,
  PARENTS_PATH,
  TEACHERS_PATH,
  SCHOOL_SUBJECTS_PATH,
  COURSES_PATH,
  GROUPS_OF_STUDENTS_PATH,
  SEMESTERS_PATH,
  GRADES_PATH,
} from "../../../utils/url";

const AdminNavbar = () => {
  const translate = React.useContext(LocalizationContext);
  return (
    <Nav className="mr-auto">
      <Nav.Link href={CUSTOMERS_PATH}>{translate("customer")}</Nav.Link>
      <Nav.Link href={STUDENTS_PATH}>{translate("student")}</Nav.Link>
      <Nav.Link href={PARENTS_PATH}>{translate("parent")}</Nav.Link>
      <Nav.Link href={TEACHERS_PATH}>{translate("teacher")}</Nav.Link>
      <Nav.Link href={COURSES_PATH}>{translate("course")}</Nav.Link>
      <Nav.Link href={SCHOOL_SUBJECTS_PATH}>
        {translate("school.subject")}
      </Nav.Link>
      <Nav.Link href={GROUPS_OF_STUDENTS_PATH}>{translate("class")}</Nav.Link>
      <Nav.Link href={SEMESTERS_PATH}>{translate("semester")}</Nav.Link>
      <Nav.Link href={GRADES_PATH}>{translate("grade")}</Nav.Link>
    </Nav>
  );
};

export default AdminNavbar;
