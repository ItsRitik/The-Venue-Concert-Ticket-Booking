import React, { useState } from 'react';
import { Button } from '@mui/material';
import AuthForm from './authForm';
import PreventSignInRoute from 'components/hoc/preventSignInRoute';

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toggleFormType = () => {
    setFormType(!formType);
  };

  return (
    <PreventSignInRoute>
      <div className="sign-in-back grid grid-cols-1 sm:grid-cols-2 gap-4 h-screen p-4 shadow-md">
        <div className={`sign-in-block p-4 sm:h-1/2 ${formType ? 'bg-gradient-to-r from-orange-200 to-indigo-100 rounded-3xl text-black' : 'bg-gradient-to-r from-orange-200 to-indigo-100 rounded-3xl text-black'} text-center sm:text-left shadow-md`}>
          {formType ? ( 
            <>
              <h1 className="text-4xl font-bold mb-2">New Here? Register Today!</h1>
              <p className="text-xl mb-4">Join our community, register, and unlock seamless ticket bookings. Your next adventure starts with us!</p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-xl mb-4">Ready to dive into the action? Log in now to secure your tickets and experience the best our platform has to offer. </p>
            </>
          )}


          <Button
            variant="contained"
            size="small"
            onClick={toggleFormType}
            className={`text-${formType ? 'blue' : 'gray'}-500 hover:underline text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
          >
            {formType ? "Already registered?" : "Need to register"}
          </Button>
        </div>
        <div className="p-6 sign-in-block text-black rounded-3xl sm:h-1/2 shadow-md">
          <h2 className="text-4xl font-bold mb-4">{formType ? 'Register' : 'Sign in'}</h2>
          <AuthForm
            formType={formType}
            {...props}
          />
        </div>
      </div>
    </PreventSignInRoute>
  );
}

export default RegisterLogin;
