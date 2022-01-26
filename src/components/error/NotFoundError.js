import React from "react";
import { Alert } from "react-bootstrap";

export default function NotFoundError() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Error 404, page not found.</Alert.Heading>
      <hr />
      <p>Sorry for disturbing you, but you are lost.</p>
    </Alert>
  );
}
