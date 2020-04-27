import * as Yup from 'yup'
import { SCHOOL_SUBJECT_NAME_REGEX } from '../utils/regex'

const SchoolSubjectEditFormValidation = (props) => {
    return Yup.object({
        schoolSubject: Yup.object({
            name: Yup.string()
                .matches(SCHOOL_SUBJECT_NAME_REGEX, props.translate('message.error.validation.subject.name'))
                .required(props.translate('message.error.validation.required'))
        })
    })
}

export default SchoolSubjectEditFormValidation