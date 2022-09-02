import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { LoginButton } from '../styled/Button.styled'
import { LoginErrorMessage } from '../styled/ErrorMessage.styled'
import { LoginFieldSet } from '../styled/Fieldset.styled'
import LoginForm from '../styled/Form.styled'
import { LoginInput } from '../styled/Input.styled'
import { LoginSubTitle } from '../styled/SubTitle.styled'
import { LoginTitle } from '../styled/Title.styled'
import {
   LoginContainer,
   LoginInputContainer,
   LoginLogoContainer,
} from '../styled/Wrappers.styled'

type FormType = 'signUp' | 'login'

const LoginScreen: React.FC = () => {
   const [formType, setFormType] = useState<FormType>('signUp')
   const isSignUpForm = formType === 'signUp'

   console.log('Running')

   return (
      <LoginContainer>
         <LoginLogoContainer>
            <Image src={Logo} alt="" width="35px" height="35px" />
         </LoginLogoContainer>
         <LoginForm>
            <LoginTitle>{isSignUpForm ? 'Sign Up' : 'Login'}</LoginTitle>
            <LoginFieldSet>
               <LoginInputContainer>
                  <LoginInput
                     type="email"
                     placeholder="Email address"
                     error={false}
                  />
               </LoginInputContainer>
               <LoginInputContainer>
                  <LoginInput
                     type="password"
                     placeholder="Password"
                     error={false}
                  />
               </LoginInputContainer>
               {isSignUpForm && (
                  <LoginInputContainer>
                     <LoginInput
                        type="password"
                        placeholder="Repeat password"
                        error={false}
                     />
                  </LoginInputContainer>
               )}
            </LoginFieldSet>
            <LoginButton>
               {isSignUpForm ? 'Create an account' : 'Login to your account'}
            </LoginButton>
            <LoginSubTitle>
               {isSignUpForm
                  ? 'Already have an account?'
                  : "Don't have an account?"}
               <button
                  type="button"
                  onClick={() => setFormType(isSignUpForm ? 'login' : 'signUp')}
               >
                  {isSignUpForm ? 'Login' : 'Sign Up'}
               </button>
            </LoginSubTitle>
         </LoginForm>
      </LoginContainer>
   )
}

export default LoginScreen
