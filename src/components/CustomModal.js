import React from "react";
import { Modal } from "react-bootstrap";

export default function CustomModal({ title, body, handleClose }) {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}
