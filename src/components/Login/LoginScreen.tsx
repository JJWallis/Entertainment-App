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

// TODO -> useDeferredValue() to debounce validation as user types - https://www.youtube.com/watch?v=jCGMedd6IWA&t=174s
// https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md -> suspense for loading state

type FormType = 'signUp' | 'login'
type InitialStateValidation = Partial<InitialState>
export type LoginFormValidator = (key: string, value: string) => string

interface InitialState {
   email: string
   password: string
   confirmedPassword?: string // optional required for delete operator
}

const REGEXP_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/
const REGEXP_EMAIL =
   /^(?=(.{1,64}@.{1,255}))([!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9}]{1,64}(\.[!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\])|([a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{2,63}){1,}))$/

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

   const validateCurrentField: LoginFormValidator = (key, value) => {
      switch (key) {
         case 'email': {
            if (value.length === 0) return "Can't be empty"
            if (!REGEXP_EMAIL.test(value)) return 'Please enter a valid email'
            break
         }
         case 'password': {
            if (value.length === 0) return "Can't be empty"
            if (!REGEXP_PASSWORD.test(value))
               return 'Please enter a valid password'
            break
         }
         case 'confirmedPassword': {
            if (value.length === 0) return "Can't be empty"
            if (value !== userDetails.password) return "Passwords don't match"
            break
         }
         default:
            return ''
      }
      return ''
   }

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const userDetailsCopy = { ...userDetails }
      if (!isSignUpForm) delete userDetailsCopy.confirmedPassword

      const newErrorMessages: InitialStateValidation = Object.entries(
         userDetailsCopy
      ).reduce((acc, [key, value]) => {
         const currentErrorMessage = validateCurrentField(key, value)
         return { ...acc, [key]: currentErrorMessage }
      }, {})

      const isConfirmedPasswordExisting =
         'confirmedPassword' in newErrorMessages

      if (!isConfirmedPasswordExisting) {
         newErrorMessages.confirmedPassword = ''
         setUserDetails({ ...userDetails, ['confirmedPassword']: '' })
      }

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
                     data-testid="login-email-field"
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
                     <LoginErrorMessage data-testid="login-email-error">
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
