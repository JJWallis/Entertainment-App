import styled from 'styled-components';

export const LoginContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
`;

export const LoginLogoContainer = styled.div`
   position: fixed;
   top: 10vh;
`;

export const LoginInputContainer = styled.div`
   position: relative;
`;

export const SearchInputContainer = styled.div`
   display: grid;
   grid-template-columns: minmax(auto, 50px) 1fr;
   & > :first-child {
      svg {
         display: grid;
         place-items: center;
         height: 100%;
      }
   }
`;
