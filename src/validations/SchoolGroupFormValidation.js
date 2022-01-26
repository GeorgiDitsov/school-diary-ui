import * as Yup from "yup";
import { SCHOOL_GROUP_REGEX } from "../utils/regex";

export default function SchoolGroupFormValidation({ translate }) {
  return Yup.object().shape({
    schoolGroup: Yup.object().shape({
      label: Yup.string()
        .matches(
          SCHOOL_GROUP_REGEX,
          translate("message.error.validation.class.name")
        )
        .required(translate("message.error.validation.required")),
    }),
  });
}
