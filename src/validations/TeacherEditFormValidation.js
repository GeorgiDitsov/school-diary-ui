import * as Yup from 'yup'
import * as regex from '../utils/regex'

const TeacherEditFormValidation = (props) => {
    return Yup.object({
        teacher: Yup.object({
            name: Yup.string()
                .matches(regex.PERSON_NAME_REGEX, props.translate('message.error.validation.person.name'))
                .required(props.translate('message.error.validation.required')),
            pin: Yup.string()
                .matches(regex.PIN_REGEX, props.translate('message.error.validation.person.pin'))
                .required(props.translate('message.error.validation.required')),
            subjects: Yup.array()
                .min(1, props.translate('message.error.validation.select.min'))
                .of(
                    Yup.object({
                        label: Yup.object()
                            .required(props.translate('message.error.validation.required')),
                        value: Yup.string()
                            .matches(regex.SCHOOL_SUBJECT_NAME_REGEX, props.translate('message.error.validation.subject.name'))
                    })
                ),
            customer: Yup.object({
                username: Yup.string()
                    .matches(regex.USERNAME_REGEX, props.translate('message.error.validation.customer.username'))
                    .required(props.translate('message.error.validation.required')),
                password: Yup.string()
                    .matches(regex.PASSWORD_REGEX, props.translate('message.error.validation.customer.password'))
                    .required(props.translate('message.error.validation.required')),
                email: Yup.string()
                    .matches(regex.EMAIL_REGEX, props.translate('message.error.validation.customer.email'))
                    .required(props.translate('message.error.validation.required'))
            })
        })
    })
}

export default TeacherEditFormValidation