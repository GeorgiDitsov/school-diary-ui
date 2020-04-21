import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import StudentEditFormValidation from '../validations/StudentEditFormValidation'
import StudentEditForm from '../components/forms/StudentEditForm'

const StudentEdit = (props) => {
    const { t } = useTranslation()
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                student: props.student
            }} 
            validationSchema={StudentEditFormValidation({translate: t})} 
            onSubmit={values => {
                props.handleUpdate(values.student)
            }} 
        >
            {formik => (<StudentEditForm formik={formik} groups={props.groups} parents={props.parents}/>)}
        </Formik>
    )
}

export default StudentEdit