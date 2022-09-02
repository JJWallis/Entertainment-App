import styled from 'styled-components'

interface LoginInputProps {
   error: boolean
}

export const LoginInput = styled.input<LoginInputProps>`
   width: 100%;
   padding: 1rem;
   border: none;
   border-bottom: 1.5px solid
      ${({ error, theme }) =>
         error ? theme.colors.brightRed : theme.colors.lightBlue};
   background-color: transparent;
   color: white;
   caret-color: red;
   transition: border-color 150ms ease-in;
   :focus {
      outline: none;
   }

   :hover {
      border-color: white;
      cursor: pointer;
   }
`
