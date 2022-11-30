import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {

   const initialValues = {
      email: '',
      description: '',
   }

   const validationSchema = Yup.object({
      email: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
   })

   const onSubmit = (values: FormikValues) => console.log('Form data', values)

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         {formik => (
            <Form>
               <FormikControl
                  control='textarea'
                  label='Description'
                  name='description'
               />
               <br />
               <button
                  type='submit'
               >
                  Submit
               </button>
            </Form>
         )}
      </Formik>
   )
}

export default FormikContainer
