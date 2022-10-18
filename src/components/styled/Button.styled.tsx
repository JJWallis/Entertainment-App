import styled from 'styled-components';

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
`;

export const BookmarkButton = styled.button`
   display: grid;
   place-content: start right;
   position: relative;
   z-index: 3;
   grid-row: 2 / 1;
   grid-column: 2 / -1;
   padding: 10px 15px 0 0;
   cursor: pointer;

   & > div {
      display: grid;
      place-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.4);
   }
`;
