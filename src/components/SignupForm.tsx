import React from 'react'
import { useFormik } from 'formik'

type ValuesType = {
   firstName?: string
   lastName?: string
   email?: string
}

const validate = (values: ValuesType) => {
   const errors: ValuesType = {};
   if (!values.firstName) {
      errors.firstName = 'Required';
   } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
   }

   if (!values.lastName) {
      errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
   }

   if (!values.email) {
      errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
   }

   return errors;
};

const SignupForm = () => {
   const formik = useFormik({
      initialValues: {
         email: '',
         firstName: '',
         lastName: '',
      },
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
            onChange={formik.handleChange}
            value={formik.values.email}
         />
         {
            formik.errors.email ? <div>{formik.errors.email}</div> : null
         }
         <br />
         <label htmlFor='firstName'>First name</label>
         <br />
         <input
            id='text'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.firstName}
         />
         <br />
         <label htmlFor='lastName'>Last name</label>
         <br />
         <input
            id='text'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastName}
         />
         <br />
         <button type='submit'>Submit</button>
      </form>
   )
}

export default SignupForm
