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
