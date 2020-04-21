import * as Yup from 'yup'
import { USERNAME_REGEX, PASSWORD_REGEX } from '../utils/regex'

const LoginValidationSchema = (props) => {
    return Yup.object({
        username: Yup.string()
            .matches(USERNAME_REGEX, props.translate('message.error.validation.customer.username'))
            .required(props.translate('message.error.validation.required')),
        password: Yup.string()
            .matches(PASSWORD_REGEX, props.translate('message.error.validation.customer.password'))
            .required(props.translate('message.error.validation.required'))
    })
}

export default LoginValidationSchema