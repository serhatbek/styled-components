import { Container } from './styles/Container';
import { Header } from './components';
import { ThemeProvider } from 'styled-components';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
