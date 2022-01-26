import React from "react";
import { SchoolGroupRow, SchoolGroupColumns } from "./items/SchoolGroup";
import List from "../List";

export default function SchoolGroups({ schoolGroups, onEdit, onDelete }) {
  const rows = schoolGroups.map((schoolGroup, index) => (
    <SchoolGroupRow
      key={index}
      schoolGroup={schoolGroup}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<SchoolGroupColumns />} rows={rows} />;
}
