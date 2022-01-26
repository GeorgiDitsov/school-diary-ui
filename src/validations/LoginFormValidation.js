import * as Yup from "yup";
import { USERNAME_REGEX, PASSWORD_REGEX } from "../utils/regex";

export default function LoginValidationSchema({ translate }) {
  return Yup.object().shape({
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
  });
}
