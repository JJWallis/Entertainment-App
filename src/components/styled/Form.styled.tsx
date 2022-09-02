import styled from 'styled-components'

export default styled.form`
   border-radius: 20px;
   padding: 1.5rem;
   background-color: ${({ theme }) => theme.colors.darkBlue};
   color: ${({ theme }) => theme.colors.white};
`
