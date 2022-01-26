import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Formik } from "formik";
import UpdateUserFormValidation from "../validations/UpdateUserFormValidation";
import CustomModal from "../components/CustomModal";
import UpdateUserForm from "../components/forms/UpdateUserForm";

const UpdateUser = ({ user, handleUpdate, handleCloseModal }) => {
  const translate = useContext(LocalizationContext);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        id: user.id,
        username: user.username,
        password: undefined,
        email: user.email,
      }}
      validationSchema={UpdateUserFormValidation({ translate: translate })}
      onSubmit={handleUpdate}
    >
      {(formik) => (
        <CustomModal
          title={`${translate("message.edit.user")} ${user.id}`}
          body={<UpdateUserForm formik={formik} />}
          handleClose={handleCloseModal}
        />
      )}
    </Formik>
  );
};

export default UpdateUser;
