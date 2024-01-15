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
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
