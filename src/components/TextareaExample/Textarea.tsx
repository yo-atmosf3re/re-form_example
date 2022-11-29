import React from 'react'
import { Field, ErrorMessage } from 'formik'

type TextareaPropsType = {
   label: string
   name: string

}

const Textarea: React.FC<TextareaPropsType> = ({
   label, name, ...rest
}) => {
   return (
      <div>
         <label htmlFor={name}>
            {label}
         </label>
         <Field
            as='textarea'
            id={name}
            name={name}
            {...rest}
         />
         <ErrorMessage
            name={name}
            component='Error'
         />
      </div>
   )
}

export default Textarea
