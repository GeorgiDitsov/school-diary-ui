import * as Yup from 'yup'
import { GROUP_OF_STUDENTS_NAME_REGEX } from '../utils/regex'

const GroupOfStudentsEditFormValidation = (props) => {
    return Yup.object({
        groupOfStudents: Yup.object({
            view: Yup.string()
                .matches(GROUP_OF_STUDENTS_NAME_REGEX, props.translate('message.error.validation.class.name'))
                .required(props.translate('message.error.validation.required'))
        })
    })
}

export default GroupOfStudentsEditFormValidation