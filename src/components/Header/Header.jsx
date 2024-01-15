import { Button } from '../../styles/Button.styled';
import { Container } from '../../styles/Container.styled';
import { StyledHeader, Nav, Logo } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='/images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
