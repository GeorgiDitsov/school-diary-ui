import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import SchoolSubjectFormValidation from "../validations/SchoolSubjectFormValidation";
import CustomModal from "../components/CustomModal";
import SchoolSubjectForm from "../components/forms/SchoolSubjectForm";

export default function SchoolSubjectContainer({
  schoolSubject,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ schoolSubject }}
      validationSchema={SchoolSubjectFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.schoolSubject)}
    >
      {(formik) => (
        <CustomModal
          title={translate("school.subject")}
          body={<SchoolSubjectForm formik={formik} />}
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
