import * as Yup from 'yup'
import { PERSON_NAME_REGEX, PIN_REGEX } from '../utils/regex'

const StudentEditFormValidation = (props) => {
    return Yup.object({
        student: Yup.object({
            name: Yup.string()
                .matches(PERSON_NAME_REGEX, props.translate('message.error.validation.customer.username'))
                .required(props.translate('message.error.validation.required')),
            pin: Yup.string()
                .matches(PIN_REGEX, props.translate('message.error.validation.customer.password'))
                .required(props.translate('message.error.validation.required')),
            group: Yup.object()
                .required(props.translate('message.error.validation.required'))
                .nullable(),
            parents: Yup.array().min(1).max(2)
        })
    })
}

export default StudentEditFormValidation