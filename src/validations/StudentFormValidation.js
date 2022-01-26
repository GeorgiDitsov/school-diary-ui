import * as Yup from "yup";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PIN_REGEX,
  USERNAME_REGEX,
} from "../utils/regex";

const StudentFormValidation = ({ translate }, validateUser) => {
  return Yup.object().shape({
    student: Yup.object().shape({
      firstName: Yup.string()
        .matches(NAME_REGEX, translate("message.error.validation.person.name"))
        .required(translate("message.error.validation.required")),
      lastName: Yup.string()
        .matches(NAME_REGEX, translate("message.error.validation.person.name"))
        .required(translate("message.error.validation.required")),
      pin: Yup.string()
        .matches(PIN_REGEX, translate("message.error.validation.person.pin"))
        .required(translate("message.error.validation.required")),
      group: Yup.object().nullable(),
      parents: Yup.array().min(1).max(2),
      user: validateUser
        ? Yup.object().shape({
            username: Yup.string()
              .matches(
                USERNAME_REGEX,
                translate("message.error.validation.user.username")
              )
              .required(translate("message.error.validation.required")),
            password: Yup.string()
              .matches(
                PASSWORD_REGEX,
                translate("message.error.validation.user.password")
              )
              .required(translate("message.error.validation.required")),
            email: Yup.string()
              .matches(
                EMAIL_REGEX,
                translate("message.error.validation.user.email")
              )
              .required(translate("message.error.validation.required")),
          })
        : Yup.object(),
    }),
  });
};

export default StudentFormValidation;
