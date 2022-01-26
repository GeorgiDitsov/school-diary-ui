import React, { useState } from "react";
import { Image, Navbar, NavDropdown } from "react-bootstrap";
import icon from "../../assests/school.svg";
import {
  ROLE_ADMIN,
  ROLE_PARENT,
  ROLE_STUDENT,
  ROLE_TEACHER,
} from "../../utils/constants";
import {
  USERS_PATH,
  INFO_PATH,
  LOGOUT_PATH,
  STUDENTS_PATH,
  PARENTS_PATH,
  TEACHERS_PATH,
  COURSES_PATH,
  SUBJECTS_PATH,
  MY_SCHOOL_COURSES_PATH,
  CLASSES_PATH,
  SEMESTERS_PATH,
  GRADES_PATH,
  MY_GRADES_PATH,
  CHILDREN_PATH,
  YEARS_PATH,
} from "../../utils/url";
import Menu from "../menu/Menu";

export default function Header({ principal, translate }) {
  const resolveOptions = () => {
    const options = [];
    if (principal?.roles.includes(ROLE_ADMIN)) {
      options.push({ label: translate("users"), link: USERS_PATH });
      options.push({ label: translate("students"), link: STUDENTS_PATH });
      options.push({ label: translate("parents"), link: PARENTS_PATH });
      options.push({ label: translate("teachers"), link: TEACHERS_PATH });
      options.push({ label: translate("courses"), link: COURSES_PATH });
      options.push({
        label: translate("school.subjects"),
        link: SUBJECTS_PATH,
      });
      options.push({
        label: translate("classes"),
        link: CLASSES_PATH,
      });
      options.push({ label: translate("semesters"), link: SEMESTERS_PATH });
      options.push({ label: translate("years"), link: YEARS_PATH });
      options.push({ label: translate("grades"), link: GRADES_PATH });
    }
    if (principal?.roles.includes(ROLE_STUDENT)) {
      options.push({
        label: translate("my.grades"),
        link: MY_GRADES_PATH,
      });
    }
    if (principal?.roles.includes(ROLE_PARENT)) {
      options.push({
        label: translate("my.children"),
        link: CHILDREN_PATH,
      });
    }
    if (principal?.roles.includes(ROLE_TEACHER)) {
      options.push({
        label: translate("my.courses"),
        link: MY_SCHOOL_COURSES_PATH,
      });
    }
    return options;
  };

  const [showMenu, setShowMenu] = useState(false);
  const [options] = useState(resolveOptions);

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            alt=""
            src={icon}
            width={30}
            height={30}
            className="d-inline-block align-top"
          />
          {` ${translate("school.diary")}`}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            className="justify-content-end"
            title={principal.username}
            alignRight
          >
            <NavDropdown.Item href={INFO_PATH}>
              {translate("info")}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={LOGOUT_PATH}>
              {translate("logout")}
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      <Menu show={showMenu} options={options} />
    </React.Fragment>
  );
}
