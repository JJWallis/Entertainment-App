import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/logo.svg'
import { LoginButton } from '../styled/Button.styled'
import { LoginFieldSet } from '../styled/Fieldset.styled'
import LoginForm from '../styled/Form.styled'
import { LoginSubTitle } from '../styled/SubTitle.styled'
import { LoginTitle } from '../styled/Title.styled'
import { LoginContainer, LoginLogoContainer } from '../styled/Wrappers.styled'

const LoginScreen: React.FC = () => {
   return (
      <LoginContainer>
         <LoginLogoContainer>
            <Image src={Logo} alt="" width="35px" height="35px" />
         </LoginLogoContainer>
         <LoginForm>
            <LoginTitle>Sign Up</LoginTitle>
            <LoginFieldSet>
               <div>
                  <input type="email" />
               </div>
               <div>
                  <input type="password" />
               </div>
               <div>
                  <input type="password" />
               </div>
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
