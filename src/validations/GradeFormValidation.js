import * as Yup from "yup";

export default function GradeFormValidation({ translate }) {
  return Yup.object().shape({
    grade: Yup.object().shape({
      value: Yup.number()
        .min(2)
        .max(6)
        .required(translate("message.error.validation.required")),
    }),
  });
}
