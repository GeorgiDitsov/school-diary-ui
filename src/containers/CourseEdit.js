import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import CustomerEditFormValidation from '../validations/CustomerEditFormValidation'
import CustomModal from '../components/CustomModal'
import CourseEditForm from '../components/forms/CourseEditForm'

const CourseEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                course: props.course
            }} 
            validationSchema={CustomerEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.course)
            }}
        >
            {formik => 
                <CustomModal 
                    handleClose={handleModal} 
                    title={translate('course')} 
                    body={<CourseEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default CourseEdit