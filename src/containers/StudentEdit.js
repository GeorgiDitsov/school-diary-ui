import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import StudentEditFormValidation from '../validations/StudentEditFormValidation'
import StudentEditForm from '../components/forms/StudentEditForm'
import CustomModal from '../components/CustomModal'

const StudentEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                student: props.student
            }} 
            validationSchema={StudentEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.student)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('students')} 
                    body={<StudentEditForm formik={formik} groups={props.groups} parents={props.parents}/>}
                />
            }
        </Formik>
    )
}

export default StudentEdit