import React, { useContext, useState } from "react";
import LocalizationContext from "../../contexts/localization-context";
import RequestService from "../../services/RequestService";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";
import { API_URL } from "../../utils/url";
import SubmitButton from "../buttons/SubmitButton";

export default function SchoolCourseForm({
  formik,
  schoolGroups,
  schoolSubjects,
  teachers,
  schoolSemesters,
}) {
  const translate = useContext(LocalizationContext);

  const [schoolSubjectsState, setSchoolSubjectsState] =
    useState(schoolSubjects);
  const [teachersState, setTeachersState] = useState(teachers);

  const updateState = (url, setState) =>
    RequestService.getData(url).then((response) => setState(response));

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>{translate("class")}</Form.Label>
        <Select
          value={formik.values.schoolCourse.group}
          onChange={(value) =>
            formik.setFieldValue("schoolCourse.group", value)
          }
          options={schoolGroups}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolCourse.group"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>{translate("school.subject")}</Form.Label>
        <Select
          value={formik.values.schoolCourse.subject}
          onChange={(value) => {
            formik.setFieldValue("schoolCourse.subject", value);
            updateState(
              `${API_URL}/v1/school-subjects/${value.value}/teachers`,
              setTeachersState
            );
          }}
          options={schoolSubjectsState}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolCourse.subject"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>{translate("teacher")}</Form.Label>
        <Select
          value={formik.values.schoolCourse.teacher}
          onChange={(value) => {
            formik.setFieldValue("schoolCourse.teacher", value);
            updateState(
              `${API_URL}/v1/teachers/${value.value}/school-subjects`,
              setSchoolSubjectsState
            );
          }}
          options={teachersState}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolCourse.teacher"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>{translate("semester")}</Form.Label>
        <Select
          value={formik.values.schoolCourse.semester}
          onChange={(value) =>
            formik.setFieldValue("schoolCourse.semester", value)
          }
          options={schoolSemesters}
        />
        <ErrorMessage
          component="div"
          className="error"
          name="schoolCourse.semester"
        />
      </Form.Group>
      <SubmitButton />
    </Form>
  );
}
