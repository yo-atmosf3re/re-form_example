import React from 'react'
import Textarea from './Textarea';

type FormikControlPropsType = {
   control: string
   label: string
   name: string
}

const FormikControl = (props: FormikControlPropsType) => {
   const {
      control, ...rest
   } = props;

   switch (control) {
      case 'input':
      case 'textarea': return <Textarea {...rest} />
      case 'select':
      case 'radio':
      case 'checkbox':
      case 'date':
      default:
         return null
   }
}

export default FormikControl
