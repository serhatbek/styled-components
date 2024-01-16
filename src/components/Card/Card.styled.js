import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin: 40px 0;
  padding: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  flex-direction: ${({ layout }) => layout};

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  div,
  figure {
    flex: 1;
  }
`;

export default StyledCard;
