import React, { useContext } from "react";
import LocalizationContext from "../../contexts/localization-context";
import { Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import Select from "react-select";
import SubmitButton from "../buttons/SubmitButton";

export default function SchoolSemesterForm({ formik, schoolYears }) {
  const translate = useContext(LocalizationContext);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          id="schoolSemester.name"
          type="text"
          value={formik.values.schoolSemester.name}
          onChange={formik.handleChange}
          placeholder={translate("name")}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolSemester.name"
        />
      </Form.Group>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>{translate("begins")}</Form.Label>
          <input
            type="date"
            value={formik.values.schoolSemester.startDate}
            min={new Date().toString()}
            max={formik.values.schoolSemester.endDate}
            onChange={(event) =>
              formik.setFieldValue(
                "schoolSemester.startDate",
                event.target.value
              )
            }
          />
          <ErrorMessage
            component="div"
            className="error"
            name="schoolSemester.startDate"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>{translate("ends")}</Form.Label>
          <input
            type="date"
            value={formik.values.schoolSemester.endDate}
            min={formik.values.schoolSemester.startDate}
            max={formik.values.schoolSemester.endDate}
            onChange={(event) =>
              formik.setFieldValue("schoolSemester.endDate", event.target.value)
            }
          />
          <ErrorMessage
            component="div"
            className="error"
            name="schoolSemester.endDate"
          />
        </Form.Group>
      </Row>
      <Form.Group>
        <Form.Label>{translate("year")}</Form.Label>
        <Select
          value={formik.values.schoolSemester.schoolYear}
          onChange={(value) =>
            formik.setFieldValue("schoolSemester.schoolYear", value)
          }
          options={schoolYears}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolSemester.schoolYear"
        />
      </Form.Group>
      <SubmitButton />
    </Form>
  );
}
