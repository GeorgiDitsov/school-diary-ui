import * as Yup from "yup";
import * as regex from "../utils/regex";

const TeacherFormValidation = ({ translate }, validateUser) => {
  return Yup.object().shape({
    teacher: Yup.object().shape({
      firstName: Yup.string()
        .matches(
          regex.NAME_REGEX,
          translate("message.error.validation.person.name")
        )
        .required(translate("message.error.validation.required")),
      lastName: Yup.string()
        .matches(
          regex.NAME_REGEX,
          translate("message.error.validation.person.name")
        )
        .required(translate("message.error.validation.required")),
      pin: Yup.string()
        .matches(
          regex.PIN_REGEX,
          translate("message.error.validation.person.pin")
        )
        .required(translate("message.error.validation.required")),
      subjects: Yup.array().min(
        1,
        translate("message.error.validation.select.min")
      ),
      user: validateUser
        ? Yup.object().shape({
            username: Yup.string()
              .matches(
                regex.USERNAME_REGEX,
                translate("message.error.validation.user.username")
              )
              .required(translate("message.error.validation.required")),
            password: Yup.string()
              .matches(
                regex.PASSWORD_REGEX,
                translate("message.error.validation.user.password")
              )
              .required(translate("message.error.validation.required")),
            email: Yup.string()
              .matches(
                regex.EMAIL_REGEX,
                translate("message.error.validation.user.email")
              )
              .required(translate("message.error.validation.required")),
          })
        : Yup.object(),
    }),
  });
};

export default TeacherFormValidation;
