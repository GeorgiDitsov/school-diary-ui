import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";

export default function SchoolGroupForm({ formik }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="schoolGroup.label"
          type="text"
          value={formik.values.schoolGroup.label}
          onChange={formik.handleChange}
          placeholder={translate("class")}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolGroup.label"
        />
      </Form.Group>
      <SubmitButton />
    </Form>
  );
}
