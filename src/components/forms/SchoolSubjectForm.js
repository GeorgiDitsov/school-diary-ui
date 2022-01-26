import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";

export default function SchoolSubjectForm({ formik }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="schoolSubject.label"
          type="text"
          value={formik.values.schoolSubject.label}
          onChange={formik.handleChange}
          placeholder={translate("name")}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolSubject.label"
        />
      </Form.Group>
      <SubmitButton />
    </Form>
  );
}
