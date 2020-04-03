import * as Yup from 'yup'
import { USERNAME_PATTERN, PASSWORD_PATTERN } from '../utils/pattern'

export const LoginValidationSchema = Yup.object({
    username: Yup.string()
        .matches(USERNAME_PATTERN, 'Username does not match the pattern')
        .required('Required field'),
    password: Yup.string()
        .matches(PASSWORD_PATTERN, 'Password does not match the pattern')
        .required('Required field')
})