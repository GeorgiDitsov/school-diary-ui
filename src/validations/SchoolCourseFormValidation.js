import * as Yup from "yup";

export default function SchoolCourseFormValidation({ translate }) {
  return Yup.object().shape({
    schoolCourse: Yup.object().shape({
      subject: Yup.object().required(
        translate("message.error.validation.required")
      ),
      teacher: Yup.object().required(
        translate("message.error.validation.required")
      ),
      group: Yup.object().required(
        translate("message.error.validation.required")
      ),
      semester: Yup.object().required(
        translate("message.error.validation.required")
      ),
    }),
  });
}
