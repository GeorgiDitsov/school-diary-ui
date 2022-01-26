import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import ParentFormValidation from "../validations/ParentFormValidation";
import CustomModal from "../components/CustomModal";
import ParentForm from "../components/forms/ParentForm";

export default function ParentContainer({ parent, handleModal, handleSubmit }) {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        parent,
      }}
      validationSchema={ParentFormValidation(
        { translate: translate },
        parent.user
      )}
      onSubmit={(values) => handleSubmit(values.parent)}
    >
      {(formik) => (
        <CustomModal
          handleClose={handleModal}
          title={translate("parent")}
          body={<ParentForm formik={formik} />}
        />
      )}
    </Formik>
  );
}
