import React, { useEffect, useState } from 'react';
import { LoginTitle } from '../styled/Title.styled';
import LoginFormStyled from '../styled/Form.styled';
import { LoginFieldSet } from '../styled/Fieldset.styled';
import { LoginInputContainer } from '../styled/Wrappers.styled';
import { LoginInput } from '../styled/Input.styled';
import { LoginErrorMessage } from '../styled/ErrorMessage.styled';
import { LoginButton } from '../styled/Button.styled';
import { LoginSubTitle } from '../styled/SubTitle.styled';

type FormStateValidation = Partial<InitialFormState>;

interface InitialFormState {
   email: string;
   password: string;
   confirmedPassword?: string; // optional required for delete operator
}

interface Props {
   toggleFormType: () => void;
   isSignUpForm: boolean;
}

const REGEXP_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
const REGEXP_EMAIL =
   /^(?=(.{1,64}@.{1,255}))([!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9}]{1,64}(\.[!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\])|([a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{2,63}){1,}))$/;

const INITIAL_STATE = {
   email: '',
   password: '',
};

const initState = (isSignUpForm: boolean) => ({
   ...INITIAL_STATE,
   ...(isSignUpForm ? { confirmedPassword: '' } : {}),
});

const LoginForm = ({ toggleFormType, isSignUpForm }: Props) => {
   const [userDetails, setUserDetails] = useState<InitialFormState>(
      initState(isSignUpForm)
   );
   const [errorMessages, setErrorMessages] = useState<InitialFormState>(
      initState(isSignUpForm)
   );

   const [formTitle, submitBtnValue, ctaValue, toggleFormLink] = isSignUpForm
      ? ['Sign Up', 'Create an account', 'Already have an account?', 'Login']
      : ['Login', 'Login to your account', "Don't have an account?", 'Sign Up'];

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>
      e.preventDefault();

   useEffect(() => {
      const validateCurrentField = (key: string, value: string) => {
         switch (key) {
            case 'email': {
               if (value.length === 0) return '';
               if (!REGEXP_EMAIL.test(value))
                  return 'Please enter a valid email';
               break;
            }
            case 'password': {
               if (value.length === 0) return '';
               if (!REGEXP_PASSWORD.test(value))
                  return 'Please enter a valid password';
               break;
            }
            case 'confirmedPassword': {
               if (value.length === 0) return '';
               if (value !== userDetails.password)
                  return "Passwords don't match";
               break;
            }
            default:
               return '';
         }
         return '';
      };

      const userDetailsCopy = { ...userDetails };

      const newErrorMessages: FormStateValidation = Object.entries(
         userDetailsCopy
      ).reduce((acc, [key, value]) => {
         const currentErrorMessage = validateCurrentField(key, value);
         return { ...acc, [key]: currentErrorMessage };
      }, {});

      const isErrorMessagesDifferent =
         JSON.stringify(errorMessages) !== JSON.stringify(newErrorMessages);

      if (isErrorMessagesDifferent)
         setErrorMessages(newErrorMessages as InitialFormState);
   }, [userDetails, isSignUpForm, errorMessages]);

   return (
      <LoginFormStyled onSubmit={handleFormSubmit}>
         <LoginTitle>{formTitle}</LoginTitle>
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
         <LoginButton>{submitBtnValue}</LoginButton>
         <LoginSubTitle>
            {ctaValue}
            <button type="button" onClick={toggleFormType}>
               {toggleFormLink}
            </button>
         </LoginSubTitle>
      </LoginFormStyled>
   );
};

export default LoginForm;
