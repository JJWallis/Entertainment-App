import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LoginTitle } from '../styled/Title.styled';
import LoginFormStyled from '../styled/Form.styled';
import { LoginFieldSet } from '../styled/Fieldset.styled';
import { LoginButton } from '../styled/Button.styled';
import { LoginSubTitle } from '../styled/SubTitle.styled';
import LoginSignUpInput from './LoginInput';
import IconAvatar from '../../assets/image-avatar.png';
import { UserWithoutId } from '../../types/User.interface';

type FormStateValidation = Partial<InitialFormState>;

export interface InitialFormState {
   email: string;
   password: string;
   confirmedPassword?: string; // optional required for delete operator
}

export type LoginFormInputNames = keyof InitialFormState;

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
   const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

   const [formTitle, submitBtnValue, ctaValue, toggleFormLink, apiEndpoint] =
      isSignUpForm
         ? [
              'Sign Up',
              'Create an account',
              'Already have an account?',
              'Login',
              '/api/users/sign-up',
           ]
         : [
              'Login',
              'Login to your account',
              "Don't have an account?",
              'Sign Up',
              '/api/users/login',
           ];

   const updateFormStateWithValue = (
      evt: React.ChangeEvent<HTMLInputElement>,
      inputName: LoginFormInputNames
   ) =>
      setUserDetails({
         ...userDetails,
         [inputName]: evt.target.value,
      });

   const handleFormSubmission = async (
      evt: React.FormEvent<HTMLFormElement>
   ) => {
      evt.preventDefault();
      try {
         const newUserData: UserWithoutId = {
            email: userDetails['email'],
            password: userDetails['password'],
            profileImage: IconAvatar,
         };

         await axios.post(apiEndpoint, newUserData);
         window.location.pathname = '/dashboard/recommended';
      } catch (error) {
         console.error(error);
      }
   };

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

      const determineSubmitButtonState = () =>
         Object.values(errorMessages).every(
            (errorMessage) => errorMessage === ''
         ) && Object.values(userDetails).every((userDetail) => userDetail);

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

      setIsSubmitButtonDisabled(!determineSubmitButtonState());
   }, [userDetails, isSignUpForm, errorMessages]);

   return (
      <LoginFormStyled onSubmit={handleFormSubmission}>
         <LoginTitle>{formTitle}</LoginTitle>
         <LoginFieldSet>
            <LoginSignUpInput
               id="email-input"
               value={userDetails['email']}
               inputType="email"
               relatedErrorMessage={errorMessages['email']}
               stateKey="email"
               updateFormStateWithValue={updateFormStateWithValue}
               placeholder="Enter your email"
            />
            <LoginSignUpInput
               id="password-input"
               value={userDetails['password']}
               inputType="password"
               relatedErrorMessage={errorMessages['password']}
               stateKey="password"
               updateFormStateWithValue={updateFormStateWithValue}
               placeholder="Enter your password"
            />
            {isSignUpForm && (
               <LoginSignUpInput
                  id="confirm-password-input"
                  value={userDetails['confirmedPassword'] as string}
                  inputType="password"
                  relatedErrorMessage={
                     errorMessages['confirmedPassword'] as string
                  }
                  stateKey="confirmedPassword"
                  updateFormStateWithValue={updateFormStateWithValue}
                  placeholder="Re-confirm your password"
               />
            )}
         </LoginFieldSet>
         <LoginButton isDisabled={isSubmitButtonDisabled}>
            {submitBtnValue}
         </LoginButton>
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
