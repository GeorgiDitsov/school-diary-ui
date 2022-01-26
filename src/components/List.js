import React from "react";
import { Table } from "react-bootstrap";
import "./List.css";

export default function List({ columns, rows }) {
  return (
    <Table size="sm" responsive>
      <thead className="thead-dark">
        <tr>{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
