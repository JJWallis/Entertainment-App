import styled from 'styled-components'

export const LoginSubTitle = styled.p`
   margin-top: 1rem;
   font-weight: ${({ theme }) => theme.fontWeights.light};
   text-align: center;

   button {
      border: none;
      padding: none;
      background-color: transparent;
      color: red;
      cursor: pointer;
      :hover {
         text-decoration: underline;
      }
   }
`
