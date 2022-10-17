import styled from 'styled-components';

export const LoginTitle = styled.h1`
   font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const MediaGalleryTitle = styled(LoginTitle)`
   margin-block: 1rem;
   color: white;
`;
