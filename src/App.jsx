import { Container } from './styles/Container.styled';
import { Header } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import { cardItems } from './data/content.js';
import Card from './components/Card/Card.jsx';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {cardItems?.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
