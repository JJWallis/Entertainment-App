import styled from 'styled-components'

export const LoginErrorMessage = styled.p`
   position: absolute;
   right: 1rem;
   top: 50%;
   transform: translateY(-50%);
   font-size: ${({ theme }) => theme.fontSizes.bodySmall};
   color: ${({ theme }) => theme.colors.brightRed};
`
