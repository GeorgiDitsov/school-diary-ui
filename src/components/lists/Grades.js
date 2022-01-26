import React from "react";
import { GradeRow, GradeColumns } from "./items/Grade";
import List from "../List";

export default function Grades({ grades }) {
  let rows = grades.map((grade, index) => (
    <GradeRow key={index} grade={grade} />
  ));

  return <List columns={<GradeColumns />} rows={rows} />;
}
