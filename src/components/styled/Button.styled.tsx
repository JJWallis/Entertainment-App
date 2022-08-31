import styled from 'styled-components'

export const LoginButton = styled.button`
   display: block;
   border: none;
   border-radius: 5px;
   padding-block: 10px;
   text-align: center;
   background-color: ${({ theme }) => theme.colors.brightRed};
   color: ${({ theme }) => theme.colors.white};
   transition: background-color, color 400ms ease-in;

   :hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.deepBlue};
   }
`
