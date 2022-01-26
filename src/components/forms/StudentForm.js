import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import Select from "react-select";
import SubmitButton from "../buttons/SubmitButton";

const StudentEditForm = ({ formik, groups, parents }) => {
  const { t } = useTranslation();

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col}>
          <Form.Control
            id="student.firstName"
            type="text"
            value={formik.values.student.firstName}
            onChange={formik.handleChange}
            placeholder={t("firstName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="student.firstName"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            id="student.lastName"
            type="text"
            value={formik.values.student.lastName}
            onChange={formik.handleChange}
            placeholder={t("lastName")}
          />
          <ErrorMessage
            component="div"
            className="error"
            name="student.lastName"
          />
        </Form.Group>
      </Row>
      <Form.Group>
        <Form.Control
          id="student.pin"
          type="text"
          value={formik.values.student.pin}
          onChange={formik.handleChange}
          placeholder={t("pin")}
        />
        <ErrorMessage component="div" className="error" name="student.pin" />
      </Form.Group>
      <Form.Group>
        <Form.Label>{t("class")}</Form.Label>
        <Select
          value={formik.values.student.group}
          onChange={(value) => formik.setFieldValue("student.group", value)}
          options={groups}
          isClearable
        />
        <ErrorMessage component="div" className="error" name="student.group" />
      </Form.Group>
      <Form.Group>
        <Form.Label>{t("parents")}</Form.Label>
        <Select
          value={formik.values.student.parents}
          onChange={(value) => formik.setFieldValue("student.parents", value)}
          options={parents}
          isMulti
        />
        <ErrorMessage
          component="div"
          className="error"
          name="student.parents"
        />
      </Form.Group>
      {!formik.values.student.username && (
        <React.Fragment>
          <Form.Group>
            <Form.Control
              id="student.user.username"
              type="text"
              value={formik.values.student.user.username}
              onChange={formik.handleChange}
              placeholder={t("username")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="student.user.username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="student.user.password"
              type="password"
              value={formik.values.student.user.password}
              onChange={formik.handleChange}
              placeholder={t("password")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="student.user.password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              id="student.user.email"
              type="email"
              value={formik.values.student.user.email}
              onChange={formik.handleChange}
              placeholder={t("email")}
            />
            <ErrorMessage
              component="div"
              className="error"
              name="student.user.email"
            />
          </Form.Group>
        </React.Fragment>
      )}
      <SubmitButton />
    </Form>
  );
};

export default StudentEditForm;
