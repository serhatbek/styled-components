import { Button } from '../../styles/Button.styled';
import { Container } from '../../styles/Container.styled';
import { Flex } from '../../styles/Flex.styled';
import { StyledHeader, Nav, Logo, Image } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='/images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores aliquid alias cum, culpa sapiente placeat quas ratione?
              Atque, aut magni non eius id expedita sint dignissimos dolorum.
              Ipsam optio voluptatibus animi omnis quisquam enim beatae
              repellat, reiciendis dicta recusandae, explicabo dolor ipsa
              dolorum maxime nesciunt eum odio at nulla excepturi laborum.
            </p>

            <Button variant='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='/images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
