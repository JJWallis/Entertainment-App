import Image from 'next/image'
import React from 'react'
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

const LoginScreen: React.FC = () => {
   return (
      <LoginContainer>
         <LoginLogoContainer>
            <Image src={Logo} alt="" width="35px" height="35px" />
         </LoginLogoContainer>
         <LoginForm>
            <LoginTitle>Sign Up</LoginTitle>
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
               <LoginInputContainer>
                  <LoginInput
                     type="password"
                     placeholder="Repeat password"
                     error={false}
                  />
               </LoginInputContainer>
            </LoginFieldSet>
            <LoginButton>Create an account</LoginButton>
            <LoginSubTitle>
               Already have an account? <button>Login</button>
            </LoginSubTitle>
         </LoginForm>
      </LoginContainer>
   )
}

export default LoginScreen
