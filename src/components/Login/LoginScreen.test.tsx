import react from 'react'
import { generateLoginErrorMessages, LoginFormValidator } from './LoginScreen'

describe('login signUp form', () => {
   it('generate login error messages will return correct error message state', () => {
      const mockUserDetails = {
         email: '',
         password: '',
         confirmedPassword: '',
      }
      const mockValidateFunc: LoginFormValidator = (key, value) => {
         if (key === 'email') return 'test email error'
         if (key === 'password') return 'test password error'
         if (key === 'confirmedPassword') return 'test confirmedPassword error'
         return ''
      }

      const newErrorMessages = generateLoginErrorMessages(
         mockUserDetails,
         mockValidateFunc
      )

      expect(newErrorMessages).toEqual({
         confirmedPassword: 'test confirmedPassword error',
         email: 'test email error',
         password: 'test password error',
      })
   })
})
