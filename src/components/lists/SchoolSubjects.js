import React from "react";
import { SchoolSubjectRow, SchoolSubjectColumns } from "./items/SchoolSubject";
import List from "../List";

export default function SchoolSubjects({ schoolSubjects, onEdit, onDelete }) {
  const rows = schoolSubjects.map((schoolSubject, index) => (
    <SchoolSubjectRow
      key={index}
      schoolSubject={schoolSubject}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));
  return <List columns={<SchoolSubjectColumns />} rows={rows} />;
}
