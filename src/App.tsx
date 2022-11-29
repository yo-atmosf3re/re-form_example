import React from 'react';
import SignupForm from './components/SignupForm';
import FormikControl from './components/TextareaExample/FormikControl';
import './scss/app.scss'

function App() {
  return (
    <div>
      {/* <SignupForm /> */}
      <FormikControl control='textarea' />
    </div>
  );
}

export default App;
