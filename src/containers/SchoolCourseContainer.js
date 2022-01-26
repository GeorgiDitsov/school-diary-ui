import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import SchoolCourseFormValidation from "../validations/SchoolCourseFormValidation";
import CustomModal from "../components/CustomModal";
import SchoolCourseForm from "../components/forms/SchoolCourseForm";

export default function SchoolCourseContainer({
  schoolCourse,
  schoolGroups,
  schoolSubjects,
  teachers,
  schoolSemesters,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ schoolCourse }}
      validationSchema={SchoolCourseFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.schoolCourse)}
    >
      {(formik) => (
        <CustomModal
          title={translate("course")}
          body={
            <SchoolCourseForm
              formik={formik}
              schoolGroups={schoolGroups}
              schoolSubjects={schoolSubjects}
              teachers={teachers}
              schoolSemesters={schoolSemesters}
            />
          }
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
