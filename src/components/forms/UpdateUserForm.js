import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";

const UpdateUserForm = ({ formik }) => {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder={translate("username")}
        />
        <ErrorMessage component="div" className="error" name="username" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder={translate("password")}
        />
        <ErrorMessage component="div" className="error" name="password" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          id="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={translate("email")}
        />
        <ErrorMessage component="div" className="error" name="email" />
      </Form.Group>
      <SubmitButton />
    </Form>
  );
};

export default UpdateUserForm;
