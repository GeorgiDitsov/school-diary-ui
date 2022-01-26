import React, { useContext } from "react";
import LocalizationContext from "../contexts/localization-context";
import { Row, Container } from "react-bootstrap";
import { Formik } from "formik";
import LoginValidationSchema from "../validations/LoginFormValidation";
import AuthenticationService from "../services/AuthenticationService";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  const translate = useContext(LocalizationContext);

  return (
    <Row className="justify-content-md-center my-5">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginValidationSchema({ translate })}
        onSubmit={AuthenticationService.handleLogin}
      >
        {(formik) => (
          <Container className="justify-content-md-center">
            <LoginForm formik={formik} />
          </Container>
        )}
      </Formik>
    </Row>
  );
}
