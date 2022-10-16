import styled from 'styled-components';

export const NavBar = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 15px 10px;
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
   ul {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
   }
`;

interface NavigationListItemProps {
   isActive: boolean;
}

export const NavigationListItem = styled.li<NavigationListItemProps>`
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
