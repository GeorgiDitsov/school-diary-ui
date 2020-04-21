import * as Yup from 'yup'
import { USERNAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX } from '../utils/regex'

const CustomerEditFormValidation = (props) => {
    return Yup.object({
        customer: Yup.object({
            username: Yup.string()
                .matches(USERNAME_REGEX, props.translate('message.error.validation.customer.username'))
                .required(props.translate('message.error.validation.required')),
            password: Yup.string()
                .matches(PASSWORD_REGEX, props.translate('message.error.validation.customer.password'))
                .required(props.translate('message.error.validation.required')),
            email: Yup.string()
                .matches(EMAIL_REGEX, props.translate('message.error.validation.customer.email'))
                .required(props.translate('message.error.validation.required'))
                .nullable()
        })
    })
}

export default CustomerEditFormValidation