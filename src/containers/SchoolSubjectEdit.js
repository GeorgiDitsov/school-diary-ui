import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import SchoolSubjectEditFormValidation from '../validations/SchoolSubjectEditFormValidation'
import CustomModal from '../components/CustomModal'
import SchoolSubjectEditForm from '../components/forms/SchoolSubjectEditForm'

const SchoolSubjectEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                schoolSubject: props.schoolSubject
            }} 
            validationSchema={SchoolSubjectEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.schoolSubject)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('school.subject')} 
                    body={<SchoolSubjectEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default SchoolSubjectEdit