import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import SchoolYearFormValidation from "../validations/SchoolYearFormValidation";
import CustomModal from "../components/CustomModal";
import SchoolYearForm from "../components/forms/SchoolYearForm";

export default function SchoolYearContainer({
  schoolYear,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ schoolYear }}
      validationSchema={SchoolYearFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.schoolYear)}
    >
      {(formik) => (
        <CustomModal
          title={translate("year")}
          body={<SchoolYearForm formik={formik} />}
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
