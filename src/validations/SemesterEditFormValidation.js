import * as Yup from 'yup'

const SemesterEditFormValidation = (props) => {
    return Yup.object({
        semester: Yup.object({
            begin: Yup.date()
                .required(props.translate('message.error.validation.required')),
            end: Yup.date()
                .required(props.translate('message.error.validation.required'))
        })
    })
}

export default SemesterEditFormValidation