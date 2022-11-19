import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

type ValuesType = {
   firstName?: string
   lastName?: string
   email?: string
}

const SignupForm = () => {
   const formik = useFormik({
      initialValues: {
         email: '',
         firstName: '',
         lastName: '',
      },
      validationSchema: Yup.object({
         firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
         lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
         email: Yup.string().email('Invalid email address')
            .required('Required'),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2))
      }
   })
   return (
      <form onSubmit={formik.handleSubmit}>
         <label htmlFor='email'>Email Address</label>
         <br />
         <input
            id='email'
            name='email'
            type='email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
         />
         {
            formik.touched.email && formik.errors.email ? (
               <div>
                  {formik.errors.email}
               </div>
            ) : null
         }
         <br />
         <label htmlFor='firstName'>First name</label>
         <br />
         <input
            id='text'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
         />
         {
            formik.touched.firstName && formik.errors.firstName ? (
               <div>
                  {formik.errors.firstName}
               </div>
            ) : null
         }
         <br />
         <label htmlFor='lastName'>Last name</label>
         <br />
         <input
            id='text'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
         />
         {
            formik.touched.lastName && formik.errors.lastName ? (
               <div>
                  {formik.errors.lastName}
               </div>
            ) : null
         }
         <br />
         <button type='submit'>Submit</button>
      </form>
   )
}

export default SignupForm
