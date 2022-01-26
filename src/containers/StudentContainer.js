import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import StudentFormValidation from "../validations/StudentFormValidation";
import StudentForm from "../components/forms/StudentForm";
import CustomModal from "../components/CustomModal";

export default function StudentContainer({
  student,
  groups,
  parents,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        student,
      }}
      validationSchema={StudentFormValidation(
        { translate: translate },
        student.user
      )}
      onSubmit={(values) => handleSubmit(values.student)}
    >
      {(formik) => (
        <CustomModal
          handleClose={handleModal}
          title={translate("student")}
          body={
            <StudentForm formik={formik} groups={groups} parents={parents} />
          }
        />
      )}
    </Formik>
  );
}
