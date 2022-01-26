import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateButton({ onCreate }) {
  return (
    <Button
      className="float-right"
      size="sm"
      variant="success"
      onClick={onCreate}
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
}
