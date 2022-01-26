import React from "react";
import { TeacherRow, TeacherColumns } from "./items/Teacher";
import List from "../List";

export default function Teachers({ teachers, onEdit, onDelete }) {
  const rows = teachers.map((teacher, index) => (
    <TeacherRow
      key={index}
      teacher={teacher}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<TeacherColumns />} rows={rows} />;
}
