import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import Select from "react-select";
import SubmitButton from "../buttons/SubmitButton";

export default function TeacherForm({ formik, schoolSubjects }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col}>
          <Form.Control
            id="teacher.firstName"
            type="text"
            value={formik.values.teacher.firstName}
            onChange={formik.handleChange}
            placeholder={translate("firstName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="teacher.firstName"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            id="teacher.lastName"
            type="text"
            value={formik.values.teacher.lastName}
            onChange={formik.handleChange}
            placeholder={translate("lastName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="teacher.lastName"
          />
        </Form.Group>
      </Row>
      <Form.Group>
        <Form.Control
          id="teacher.pin"
          type="text"
          value={formik.values.teacher.pin}
          onChange={formik.handleChange}
          placeholder={translate("pin")}
        />
        <ErrorMessage component="div" className="error" name="teacher.pin" />
      </Form.Group>
      <Form.Group>
        <Select
          value={formik.values.teacher.subjects}
          onChange={(value) => formik.setFieldValue("teacher.subjects", value)}
          options={schoolSubjects}
          placeholder={translate("school.subjects")}
          isMulti
        />
        <ErrorMessage
          component="div"
          className="error"
          name="teacher.subjects"
        />
      </Form.Group>
      {!formik.values.teacher.username && (
        <React.Fragment>
          <Form.Group>
            <Form.Control
              id="teacher.user.username"
              type="text"
              value={formik.values.teacher.user.username}
              onChange={formik.handleChange}
              placeholder={translate("username")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="teacher.user.username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="teacher.user.password"
              type="password"
              value={formik.values.teacher.user.password}
              onChange={formik.handleChange}
              placeholder={translate("password")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="teacher.user.password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="teacher.user.email"
              type="email"
              value={formik.values.teacher.user.email}
              onChange={formik.handleChange}
              placeholder={translate("email")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="teacher.user.email"
            />
          </Form.Group>
        </React.Fragment>
      )}

      <SubmitButton />
    </Form>
  );
}
