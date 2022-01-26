import * as Yup from "yup";

export default function SchoolSemesterFormValidation({ translate }) {
  return Yup.object().shape({
    schoolSemester: Yup.object().shape({
      name: Yup.string().required(
        translate("message.error.validation.required")
      ),
      startDate: Yup.date().required(
        translate("message.error.validation.required")
      ),
      endDate: Yup.date().required(
        translate("message.error.validation.required")
      ),
      schoolYear: Yup.object().required(
        translate("message.error.validation.required")
      ),
    }),
  });
}
