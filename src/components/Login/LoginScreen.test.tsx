import LoginScreen from './LoginScreen'
import { render, fireEvent } from '@testing-library/react'
import { Theme } from '../styled/Theme'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'

const renderEditor = () => {
   const utils = render(
      <ThemeProvider theme={Theme}>
         <LoginScreen />
      </ThemeProvider>
   )
   return utils
}

describe('login signUp form', () => {
   it('renders form and form controls correctly on initial load', () => {
      const { getByRole, getAllByRole, getByTestId, getByText } = renderEditor()
      const inputs = getAllByRole('textbox')
      const emailField = getByTestId('login-email-field')

      inputs.map((input) => {
         expect(input.textContent).toBe('')
      })

      fireEvent.change(emailField, {
         target: {
            value: 'bad.email@test',
         },
      })

      expect(emailField).toHaveValue('bad.email@test')
      fireEvent.click(getByText(/create an account/i))

      const emailError = getByTestId('login-email-error')
      expect(emailError).toBeInTheDocument()
   })
})
