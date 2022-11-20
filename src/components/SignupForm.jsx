import React from 'react'
import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup';
// import './SignupForm.module.scss'


const MyTextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <input className="text-input" {...field} {...props} />
         {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
         ) : null}
      </>
   )
}

const MyCheckbox = ({ children, ...props }) => {
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (

      <label>
         <input type={'checkbox'} {...field} {...props} />
         {children}
         {
            meta.touched && meta.error ? (
               <div>
                  {meta.error}
               </div>
            ) : null
         }
      </label>

   )
}

const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <div>
         <label htmlFor={props.id || props.name}>{label}</label>
         <select {...field} {...props} />
         {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
         ) : null}
      </div>
   );
};

const SignupForm = () => {
   return (
      <div className='signup-form'>
         <div className='wrapper'>
            <h1 className='wrapper__header'>Subscribe!</h1>
            <Formik
               initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  acceptedTerms: false,
                  jobType: '',
               }}
               validationSchema={Yup.object({
                  firstName: Yup.string()
                     .max(15, 'Must be 15 characters or less')
                     .required('Required'),
                  lastName: Yup.string()
                     .max(20, 'Must be 20 characters or less')
                     .required('Required'),
                  email: Yup.string().email('Invalid email address').required('Required'),
                  acceptedTerms: Yup.boolean()
                     .required('Required')
                     .oneOf([true], 'You must accept the terms and conditions.'),
                  jobType: Yup.string()
                     .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                     )
                     .required('Required'),
               })}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                  }, 400);
               }}
            >
               <Form>
                  <div className='wrapper__f-name'>
                     <MyTextInput
                        label='First name'
                        name='firstName'
                        type='text'
                        placeholder='Jane'
                        className='f-name__field'
                     />
                  </div>
                  <div className='wrapper__l-name'>
                     <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className='l-name__field'
                     />
                  </div>
                  <div className='wrapper__email-block'>
                     <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                        className='email-block__field'
                     />
                  </div>
                  <br />
                  <div className='wrapper__select-job'>
                     <MySelect className='select-job__list' label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                     </MySelect>
                  </div>
                  <br />
                  <div classname='wrapper__accept-check'>
                     <MyCheckbox className='accept-check__flag' name='acceptedTerms'>
                        I accept the terms and conditions
                     </MyCheckbox>
                  </div>
                  <br />
                  <button className='wrapper__button-submit' type="submit">Submit</button>
               </Form>
            </Formik>
         </div>
      </div>
   )
}

export default SignupForm
