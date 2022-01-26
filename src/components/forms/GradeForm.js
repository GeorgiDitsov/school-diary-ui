import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";
import DeleteButton from "../buttons/DeleteButton";

export default function GradeForm({ formik, handleDelete }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="grade.value"
          type="text"
          value={formik.values.grade.value}
          onChange={formik.handleChange}
          placeholder={translate("grade")}
        />
        <ErrorMessage component="div" className="error" name="grade.value" />
      </Form.Group>
      <SubmitButton />
      {formik.values.grade.id && (
        <DeleteButton onClick={() => handleDelete(formik.values.grade.id)} />
      )}
    </Form>
  );
}
