import * as Yup from "yup";
import {
  NAME_REGEX,
  PIN_REGEX,
  USERNAME_REGEX,
  PASSWORD_REGEX,
  EMAIL_REGEX,
} from "../utils/regex";

const ParentFormValidation = ({ translate }, validateUser) => {
  return Yup.object().shape({
    parent: Yup.object().shape({
      firstName: Yup.string()
        .matches(NAME_REGEX, translate("message.error.validation.person.name"))
        .required(translate("message.error.validation.required")),
      lastName: Yup.string()
        .matches(NAME_REGEX, translate("message.error.validation.person.name"))
        .required(translate("message.error.validation.required")),
      pin: Yup.string()
        .matches(PIN_REGEX, translate("message.error.validation.person.pin"))
        .required(translate("message.error.validation.required")),
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

export default ParentFormValidation;
