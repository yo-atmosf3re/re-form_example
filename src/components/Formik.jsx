import { useFormik } from 'formik';
import React from 'react'

const FormikContext = React.createContext({});

export const Formik = ({ children, ...props }) => {
   const formikStateAndHelpers = useFormik(props)
   return (
      <FormikContext.Provider value={formikStateAndHelpers}>
         {
            typeof children === 'function'
               ? children(formikStateAndHelpers)
               : children
         }
      </FormikContext.Provider>
   )
}
