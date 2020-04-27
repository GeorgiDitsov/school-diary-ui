import React from 'react'
import LocalizationContext from '../context/localization-context'
import { Formik } from 'formik'
import CustomerEditFormValidation from '../validations/CustomerEditFormValidation'
import CustomModal from '../components/CustomModal'
import CustomerEditForm from '../components/forms/CustomerEditForm'

const CustomerEdit = (props) => {
    const translate = React.useContext(LocalizationContext)
    const handleCloseModal = () => {
        props.handleCloseModal()
    }
    return (
        <Formik
            enableReinitialize 
            initialValues={{
                customer: props.customer
            }} 
            validationSchema={CustomerEditFormValidation({translate: translate})} 
            onSubmit={values => {
                props.handleUpdate(values.customer)
            }}
        >
            {formik => 
                <CustomModal 
                    handleClose={handleCloseModal} 
                    title={translate('message.edit.customer') + ' ' + formik.values.customer.id} 
                    body={<CustomerEditForm formik={formik}/>}
                />
            }
        </Formik>
    )
}

export default CustomerEdit