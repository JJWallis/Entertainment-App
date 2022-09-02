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

interface InitialState {
   email: string
   password: string
   confirmedPassword?: string // optional required for delete operator
}

const INITIAL_STATE = {
   email: '',
   password: '',
   confirmedPassword: '',
}

const LoginScreen: React.FC = () => {
   const [formType, setFormType] = useState<FormType>('signUp')
   const [userDetails, setUserDetails] = useState<InitialState>(INITIAL_STATE)
   const [errorMessages, setErrorMessages] =
      useState<InitialState>(INITIAL_STATE)
   const isSignUpForm = formType === 'signUp'

   const validateCurrentField = (key: string, value: string) => {
      if (key === 'email') return 'Email error'
      if (key === 'password') return 'Password error'
      if (key === 'confirmedPassword') return 'Confirmed password error'
   }

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const userDetailsCopy = { ...userDetails }
      if (!isSignUpForm) delete userDetailsCopy.confirmedPassword

      console.log(Object.entries(userDetailsCopy))

      const newErrorMessages: Partial<InitialState> = Object.entries(
         userDetailsCopy
      ).reduce((acc, [key, value]) => {
         const currentErrorMessage = validateCurrentField(key, value)
         return { ...acc, [key]: currentErrorMessage }
      }, {})

      if (!newErrorMessages.confirmedPassword) {
         newErrorMessages.confirmedPassword = ''
         setUserDetails({ ...userDetails, ['confirmedPassword']: '' })
      }

      console.log(newErrorMessages)

      setErrorMessages(newErrorMessages as InitialState)
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
                        value={userDetails.confirmedPassword}
                        onChange={(evt) =>
                           setUserDetails({
                              ...userDetails,
                              ['confirmedPassword']: evt.target.value,
                           })
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
