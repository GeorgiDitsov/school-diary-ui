import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import SchoolSemesterFormValidation from "../validations/SchoolSemesterFormValidation";
import CustomModal from "../components/CustomModal";
import SchoolSemesterForm from "../components/forms/SchoolSemesterForm";

export default function SchoolSemesterContainer({
  schoolSemester,
  schoolYears,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ schoolSemester }}
      validationSchema={SchoolSemesterFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.schoolSemester)}
    >
      {(formik) => (
        <CustomModal
          title={translate("semester")}
          body={
            <SchoolSemesterForm formik={formik} schoolYears={schoolYears} />
          }
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
