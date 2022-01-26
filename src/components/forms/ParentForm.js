import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";

const ParentForm = ({ formik }) => {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col}>
          <Form.Control
            id="parent.firstName"
            type="text"
            value={formik.values.parent.firstName}
            onChange={formik.handleChange}
            placeholder={translate("firstName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="parent.firstName"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            id="parent.lastName"
            type="text"
            value={formik.values.parent.lastName}
            onChange={formik.handleChange}
            placeholder={translate("lastName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="parent.lastName"
          />
        </Form.Group>
      </Row>
      <Form.Group>
        <Form.Control
          id="parent.pin"
          type="text"
          value={formik.values.parent.pin}
          onChange={formik.handleChange}
          placeholder={translate("pin")}
        />
        <ErrorMessage component="div" className="error" name="parent.pin" />
      </Form.Group>
      {!formik.values.parent.username && (
        <React.Fragment>
          <Form.Group>
            <Form.Control
              id="parent.user.username"
              type="text"
              value={formik.values.parent.user.username}
              onChange={formik.handleChange}
              placeholder={translate("username")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="parent.user.username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="parent.user.password"
              type="password"
              value={formik.values.parent.user.password}
              onChange={formik.handleChange}
              placeholder={translate("password")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="parent.user.password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="parent.user.email"
              type="email"
              value={formik.values.parent.user.email}
              onChange={formik.handleChange}
              placeholder={translate("email")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="parent.user.email"
            />
          </Form.Group>
        </React.Fragment>
      )}

      <SubmitButton />
    </Form>
  );
};

export default ParentForm;
