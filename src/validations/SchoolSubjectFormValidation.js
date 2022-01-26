import * as Yup from "yup";
import { SCHOOL_SUBJECT_NAME_REGEX } from "../utils/regex";

export default function SchoolSubjectFormValidation({ translate }) {
  return Yup.object().shape({
    schoolSubject: Yup.object().shape({
      label: Yup.string()
        .matches(
          SCHOOL_SUBJECT_NAME_REGEX,
          translate("message.error.validation.subject.name")
        )
        .required(translate("message.error.validation.required")),
    }),
  });
}
