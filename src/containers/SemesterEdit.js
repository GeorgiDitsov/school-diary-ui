import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import SemesterEditFormValidation from '../validations/SemesterEditFormValidation'
import CustomModal from '../components/CustomModal'
import SemesterEditForm from '../components/forms/SemesterEditForm'

const SemesterEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                semester: props.semester
            }} 
            validationSchema={SemesterEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.semester)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('semester')} 
                    body={<SemesterEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default SemesterEdit