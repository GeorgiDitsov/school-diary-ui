import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import ParentEditFormValidation from '../validations/ParentEditFormValidation'
import CustomModal from '../components/CustomModal'
import ParentEditForm from '../components/forms/ParentEditForm'

const ParentEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleModal = () => {
        props.handleModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                parent: props.parent
            }} 
            validationSchema={ParentEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleSubmit(values.parent)
            }} 
        >
            {formik => 
                <CustomModal
                    handleClose={handleModal} 
                    title={translate('parents')} 
                    body={<ParentEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default ParentEdit