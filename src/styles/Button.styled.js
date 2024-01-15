import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  color: ${({ color }) => color || '#333'};
  background-color: ${({ variant }) => variant || '#fff'};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
