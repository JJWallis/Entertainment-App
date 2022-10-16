import styled from 'styled-components';

export const NavBar = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 15px 10px;
   margin-bottom: 25px;
   color: white;
   background-color: ${({ theme }) => theme.colors.darkBlue};

   & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;

export const NavBarNavigation = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;
   ul {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 15px;
   }
`;

interface NavigationListItemProps {
   isActive: boolean;
}

export const NavigationListItem = styled.li<NavigationListItemProps>`
   display: grid;
   place-items: center;
   cursor: pointer;
   svg {
      path {
         transition: fill 200ms ease-in;
         ${({ isActive }) => isActive && 'fill: white;'}
      }
   }
   svg:hover {
      path {
         fill: white;
      }
   }
`;
