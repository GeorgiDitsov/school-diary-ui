import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import GradeFormValidation from "../validations/GradeFormValidation";
import CustomModal from "../components/CustomModal";
import GradeForm from "../components/forms/GradeForm";

export default function GradeContainer({
  grade,
  handleModal,
  handleSubmit,
  handleDelete,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ grade }}
      validationSchema={GradeFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.grade)}
    >
      {(formik) => (
        <CustomModal
          title={translate("grade")}
          body={<GradeForm formik={formik} handleDelete={handleDelete} />}
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
