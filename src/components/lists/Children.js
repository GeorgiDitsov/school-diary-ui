import React from "react";
import List from "../List";
import { ChildColumns, ChildRow } from "./items/Child";

export default function Children({ children }) {
  const rows = children.map((child, index) => (
    <ChildRow key={index} child={child} />
  ));

  return <List columns={<ChildColumns />} rows={rows} />;
}
