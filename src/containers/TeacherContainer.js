import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import TeacherFormValidation from "../validations/TeacherFormValidation";
import CustomModal from "../components/CustomModal";
import TeacherForm from "../components/forms/TeacherForm";

export default function TeacherContainer({
  teacher,
  schoolSubjects,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        teacher,
      }}
      validationSchema={TeacherFormValidation(
        { translate: translate },
        teacher.user
      )}
      onSubmit={(values) => handleSubmit(values.teacher)}
    >
      {(formik) => (
        <CustomModal
          handleClose={handleModal}
          title={translate("teacher")}
          body={<TeacherForm formik={formik} schoolSubjects={schoolSubjects} />}
        />
      )}
    </Formik>
  );
}
