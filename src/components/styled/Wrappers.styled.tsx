import styled from 'styled-components';

export const ContainerWrapper = styled.div`
   padding-inline: 20px;
   @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      padding-inline: 0;
   }
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

export const DashboardMainContainer = styled.main`
   @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      padding: 20px;
   }
`;

export const SearchInputContainer = styled(ContainerWrapper)`
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

export const GalleryContainer = styled(ContainerWrapper)`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   & > * {
      outline: 1px solid white;
      padding-bottom: 20px;
   }
`;

export const MediaInfoContainer = styled.div`
   display: flex;
   align-items: center;
   gap: clamp(5px, 3vw, 20px);
`;
