import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Spinner
      animation="border"
      style={{ position: "absolute", top: "50%", left: "50%" }}
    />
  );
}
