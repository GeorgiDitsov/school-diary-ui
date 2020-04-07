import * as Yup from 'yup'
import { USERNAME_PATTERN, PASSWORD_PATTERN } from '../utils/pattern'

const LoginValidationSchema = (props) => {
    return Yup.object({
        username: Yup.string()
            .matches(USERNAME_PATTERN, props.translate('message.error.validation.customer.username'))
            .required(props.translate('message.error.validation.required')),
        password: Yup.string()
            .matches(PASSWORD_PATTERN, props.translate('message.error.validation.customer.password'))
            .required(props.translate('message.error.validation.required'))
    })
}

export default LoginValidationSchema