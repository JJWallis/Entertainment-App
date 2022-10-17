import styled from 'styled-components';

export const ContainerWrapper = styled.div`
   padding-inline: 20px;
`;

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
   width: 90%;
   margin-inline: auto;
   & > :first-child {
      svg {
         display: grid;
         place-items: center;
         height: 100%;
      }
   }
`;

export const GalleryContainer = styled.div`
   outline: 1px solid white;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
   & > * {
      outline: 1px solid white;
   }
`;
