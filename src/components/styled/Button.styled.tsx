import styled from 'styled-components'

export const LoginButton = styled.button`
   display: block;
   width: 100%;
   border: none;
   border-radius: 7px;
   padding-block: 0.8rem;
   text-align: center;
   background-color: ${({ theme }) => theme.colors.brightRed};
   color: ${({ theme }) => theme.colors.white};
   transition: background-color 200ms linear, color 200ms linear;
   cursor: pointer;

   :hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.deepBlue};
   }
`
