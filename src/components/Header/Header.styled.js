import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header || 'black'};
  padding: 40px 0;
`;
