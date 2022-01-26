import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import SchoolGroupFormValidation from "../validations/SchoolGroupFormValidation";
import CustomModal from "../components/CustomModal";
import SchoolGroupForm from "../components/forms/SchoolGroupForm";

export default function SchoolGroupContainer({
  schoolGroup,
  handleModal,
  handleSubmit,
}) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{ schoolGroup }}
      validationSchema={SchoolGroupFormValidation({ translate: translate })}
      onSubmit={(values) => handleSubmit(values.schoolGroup)}
    >
      {(formik) => (
        <CustomModal
          title={translate("class")}
          body={<SchoolGroupForm formik={formik} />}
          handleClose={handleModal}
        />
      )}
    </Formik>
  );
}
