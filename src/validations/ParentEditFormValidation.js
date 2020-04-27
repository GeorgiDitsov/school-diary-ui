import * as Yup from 'yup'
import { PERSON_NAME_REGEX, PIN_REGEX, USERNAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX } from '../utils/regex'

const ParentEditFormValidation = (props) => {
    return Yup.object({
        parent: Yup.object({
            name: Yup.string()
                .matches(PERSON_NAME_REGEX, props.translate('message.error.validation.person.name'))
                .required(props.translate('message.error.validation.required')),
            pin: Yup.string()
                .matches(PIN_REGEX, props.translate('message.error.validation.person.pin'))
                .required(props.translate('message.error.validation.required')),
            customer: Yup.object({
                username: Yup.string()
                    .matches(USERNAME_REGEX, props.translate('message.error.validation.customer.username'))
                    .required(props.translate('message.error.validation.required')),
                password: Yup.string()
                    .matches(PASSWORD_REGEX, props.translate('message.error.validation.customer.password'))
                    .required(props.translate('message.error.validation.required')),
                email: Yup.string()
                    .matches(EMAIL_REGEX, props.translate('message.error.validation.customer.email'))
                    .required(props.translate('message.error.validation.required')),
            })
        })
    })
}

export default ParentEditFormValidation