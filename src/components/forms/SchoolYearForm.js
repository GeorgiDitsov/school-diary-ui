import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import SubmitButton from "../buttons/SubmitButton";

export default function SchoolYearForm({ formik }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="schoolYear.name"
          type="text"
          value={formik.values.schoolYear.name}
          onChange={formik.handleChange}
          placeholder={translate("name")}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolYear.name"
        />
      </Form.Group>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>{translate("begins")}</Form.Label>
          <input
            type="date"
            value={formik.values.schoolYear.startDate}
            min={new Date().toString()}
            max={formik.values.schoolYear.endDate}
            onChange={(event) =>
              formik.setFieldValue("schoolYear.startDate", event.target.value)
            }
          />
          <ErrorMessage
            component="div"
            className="error"
            name="schoolYear.startDate"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>{translate("ends")}</Form.Label>
          <input
            type="date"
            value={formik.values.schoolYear.endDate}
            min={formik.values.schoolYear.startDate}
            max={formik.values.schoolYear.endDate}
            onChange={(event) =>
              formik.setFieldValue("schoolYear.endDate", event.target.value)
            }
          />
          <ErrorMessage
            component="div"
            className="error"
            name="schoolYear.endDate"
          />
        </Form.Group>
      </Row>
      <SubmitButton />
    </Form>
  );
}
