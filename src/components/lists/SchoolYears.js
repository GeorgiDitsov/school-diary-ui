import React from "react";
import List from "../List";
import { SchoolYearColumns, SchoolYearRow } from "./items/SchoolYear";

export default function SchoolYears({ schoolYears, onEdit, onDelete }) {
  const rows = schoolYears.map((schoolYear, index) => (
    <SchoolYearRow
      key={index}
      schoolYear={schoolYear}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<SchoolYearColumns />} rows={rows} />;
}
