import React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import CustomerEditFormValidation from '../validations/CustomerEditFormValidation'
import CustomModal from '../components/CustomModal'
import CustomerEditForm from '../components/forms/CustomerEditForm'

const CustomerEdit = (props) => {
    const { t } = useTranslation()
    const handleCloseModal = () => {
        props.handleCloseModal()
    }

    return (
        <Formik
            enableReinitialize 
            initialValues={{
                customer: props.customer
            }} 
            validationSchema={CustomerEditFormValidation({translate: t})} 
            onSubmit={values => {
                props.handleUpdate(values.customer)
            }}
        >
            {formik => (
                <CustomModal 
                    handleClose={handleCloseModal}
                    title={t('message.edit.customer') + ' ' + formik.values.customer.id} 
                    body={<CustomerEditForm formik={formik}/>}
                />
            )}
        </Formik>
    )
}

export default CustomerEdit