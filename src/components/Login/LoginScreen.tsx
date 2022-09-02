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

const INITIAL_STATE = {
   email: '',
   password: '',
}

const LoginScreen: React.FC = () => {
   const [formType, setFormType] = useState<FormType>('signUp')
   const [userDetails, setUserDetails] = useState(INITIAL_STATE)
   const [errorMessages, setErrorMessage] = useState({
      ...INITIAL_STATE,
      confirmedPassword: '',
   })
   const [confirmedPassword, setConfirmedPassword] = useState('')
   const isSignUpForm = formType === 'signUp'

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   return (
      <LoginContainer>
         <LoginLogoContainer>
            <Image src={Logo} alt="" width="35px" height="35px" />
         </LoginLogoContainer>
         <LoginForm onSubmit={handleFormSubmit}>
            <LoginTitle>{isSignUpForm ? 'Sign Up' : 'Login'}</LoginTitle>
            <LoginFieldSet>
               <LoginInputContainer>
                  <LoginInput
                     type="email"
                     value={userDetails.email}
                     onChange={(evt) =>
                        setUserDetails({
                           ...userDetails,
                           ['email']: evt.target.value,
                        })
                     }
                     placeholder="Email address"
                     error={!!errorMessages.email}
                  />
                  {errorMessages.email && (
                     <LoginErrorMessage>
                        {errorMessages.email}
                     </LoginErrorMessage>
                  )}
               </LoginInputContainer>
               <LoginInputContainer>
                  <LoginInput
                     type="password"
                     value={userDetails.password}
                     onChange={(evt) =>
                        setUserDetails({
                           ...userDetails,
                           ['password']: evt.target.value,
                        })
                     }
                     placeholder="Password"
                     error={!!errorMessages.password}
                  />
                  {errorMessages.password && (
                     <LoginErrorMessage>
                        {errorMessages.password}
                     </LoginErrorMessage>
                  )}
               </LoginInputContainer>
               {isSignUpForm && (
                  <LoginInputContainer>
                     <LoginInput
                        type="password"
                        value={confirmedPassword}
                        onChange={(evt) =>
                           setConfirmedPassword(evt.target.value)
                        }
                        placeholder="Repeat password"
                        error={!!errorMessages.confirmedPassword}
                     />
                     {errorMessages.confirmedPassword && (
                        <LoginErrorMessage>
                           {errorMessages.confirmedPassword}
                        </LoginErrorMessage>
                     )}
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
