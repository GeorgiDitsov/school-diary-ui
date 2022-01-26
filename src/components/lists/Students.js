import React, { useContext } from "react";
import PrincipalContext from "../../contexts/principal-context";
import { ROLE_ADMIN, ROLE_TEACHER } from "../../utils/constants";
import {
  StudentRow,
  StudentColumns,
  StudentAndGradesRow,
  StudentAndGradesColumns,
} from "./items/Student";
import List from "../List";

export default function Students({ students, onCreate, onEdit, onDelete }) {
  const principal = useContext(PrincipalContext);

  const columns =
    (principal.roles.includes(ROLE_ADMIN) && <StudentColumns />) ||
    (principal.roles.includes(ROLE_TEACHER) && <StudentAndGradesColumns />);

  const rows = students.map(
    (student, index) =>
      (principal.roles.includes(ROLE_ADMIN) && (
        <StudentRow
          key={index}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )) ||
      (principal.roles.includes(ROLE_TEACHER) && (
        <StudentAndGradesRow
          key={index}
          student={student}
          onCreate={onCreate}
          onEdit={onEdit}
        />
      ))
  );

  return <List columns={columns} rows={rows} />;
}
