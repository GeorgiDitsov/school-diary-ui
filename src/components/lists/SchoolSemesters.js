import React from "react";
import {
  SchoolSemesterRow,
  SchoolSemesterColumns,
} from "./items/SchoolSemester";
import List from "../List";

export default function SchoolSemesters({ schoolSemesters, onEdit, onDelete }) {
  const rows = schoolSemesters.map((schoolSemester, index) => (
    <SchoolSemesterRow
      key={index}
      schoolSemester={schoolSemester}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<SchoolSemesterColumns />} rows={rows} />;
}
