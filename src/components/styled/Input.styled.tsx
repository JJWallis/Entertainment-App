import styled from 'styled-components';

interface LoginInputProps {
   error: boolean;
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
`;

export const SearchInput = styled.input`
   outline: none;
   border: none;
   width: 100%;
   border-bottom: 2px solid transparent;
   color: white;
   background-color: ${({ theme }) => theme.colors.deepBlue};
   transition: border-bottom-color 100ms ease-in;
   &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.lightBlue};
   }
`;
