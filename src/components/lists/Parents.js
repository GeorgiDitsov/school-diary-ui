import React from "react";
import { ParentRow, ParentColumns } from "./items/Parent";
import List from "../List";

export default function Parents({ parents, onEdit, onDelete }) {
  const rows = parents.map((parent, index) => (
    <ParentRow
      key={index}
      parent={parent}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return <List columns={<ParentColumns />} rows={rows} />;
}
