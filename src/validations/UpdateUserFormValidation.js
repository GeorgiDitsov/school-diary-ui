import * as Yup from "yup";
import { USERNAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX } from "../utils/regex";

export default function UpdateUserFormValidation({ translate }) {
  return Yup.object().shape({
    username: Yup.string()
      .matches(
        USERNAME_REGEX,
        translate("message.error.validation.user.username")
      )
      .required(translate("message.error.validation.required")),
    password: Yup.string().matches(
      PASSWORD_REGEX,
      translate("message.error.validation.user.password")
    ),
    email: Yup.string()
      .matches(EMAIL_REGEX, translate("message.error.validation.user.email"))
      .required(translate("message.error.validation.required")),
  });
}
