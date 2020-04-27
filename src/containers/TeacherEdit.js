import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import TeacherEditFormValidation from '../validations/TeacherEditFormValidation'
import CustomModal from '../components/CustomModal'
import TeacherEditForm from '../components/forms/TeacherEditForm'

const TeacherEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                teacher: props.teacher
            }} 
            validationSchema={TeacherEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.teacher)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('teacher')} 
                    body={<TeacherEditForm formik={formik} schoolSubjects={props.schoolSubjects}/>}
                />
            }
        </Formik>
    )
}

export default TeacherEdit