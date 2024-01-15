import { Container } from './styles/Container.styled';
import { Header } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
