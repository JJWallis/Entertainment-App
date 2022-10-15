import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import LoginForm from './LoginForm';
import { LoginContainer, LoginLogoContainer } from '../styled/Wrappers.styled';

type FormType = 'signUp' | 'login';

const LoginScreen: React.FC = () => {
   const [formType, setFormType] = useState<FormType>('signUp');
   const isSignUpForm = formType === 'signUp';

   const toggleFormType = () => setFormType(isSignUpForm ? 'login' : 'signUp');

   return (
      <LoginContainer>
         <LoginLogoContainer>
            <Image src={Logo} alt="" width="35px" height="35px" />
         </LoginLogoContainer>
         {isSignUpForm ? (
            <LoginForm
               key="signUpForm"
               toggleFormType={toggleFormType}
               isSignUpForm={isSignUpForm}
            />
         ) : (
            <LoginForm
               key="loginForm"
               toggleFormType={toggleFormType}
               isSignUpForm={isSignUpForm}
            />
         )}
      </LoginContainer>
   );
};

export default LoginScreen;
