import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikContainer = () => {

   const initialValues: Record<string, string> = {
      email: '',
      description: ''
   }

   const validationSchema = Yup.object({
      email: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
   })

   const onSubmit = (values: any) => console.log('Form data', values)
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >

      </Formik>
   )
}

export default FormikContainer
