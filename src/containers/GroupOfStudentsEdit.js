import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import GroupOfStudentsEditFormValidation from '../validations/GroupOfStudentsEditFormValidation'
import CustomModal from '../components/CustomModal'
import GroupOfStudentsEditForm from '../components/forms/GroupOfStudentsEditForm'

const GroupOfStudentsEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                groupOfStudents: props.groupOfStudents
            }} 
            validationSchema={GroupOfStudentsEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.groupOfStudents)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('classes')} 
                    body={<GroupOfStudentsEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default GroupOfStudentsEdit