import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/logo.svg'
import { LoginButton } from '../styled/Button.styled'
import LoginForm from '../styled/Form.styled'
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
            <fieldset>
               <div>
                  <label>Email address</label>
                  <input type="email" />
               </div>
               <div>
                  <label>Password</label>
                  <input type="password" />
               </div>
               <div>
                  <label>Repeat password</label>
                  <input type="password" />
               </div>
               <LoginButton>Create an account</LoginButton>
            </fieldset>
         </LoginForm>
      </LoginContainer>
   )
}

export default LoginScreen
