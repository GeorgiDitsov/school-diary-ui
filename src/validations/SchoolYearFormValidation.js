import * as Yup from "yup";

export default function SchoolYearFormValidation({ translate }) {
  return Yup.object().shape({
    schoolYear: Yup.object().shape({
      name: Yup.string().required(
        translate("message.error.validation.required")
      ),
      startDate: Yup.date().required(
        translate("message.error.validation.required")
      ),
      endDate: Yup.date().required(
        translate("message.error.validation.required")
      ),
    }),
  });
}
