import React from "react";
import { SchoolCourseRow, SchoolCourseColumns } from "./items/SchoolCourse";
import List from "../List";

export default function SchoolCourses({ schoolCourses, onEdit, onDelete }) {
  const rows = schoolCourses.map((schoolCourse, index) => (
    <SchoolCourseRow
      key={index}
      schoolCourse={schoolCourse}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<SchoolCourseColumns />} rows={rows} />;
}
