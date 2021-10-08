import { Header } from './components/header/Header.jsx';
import { Container, Snackbar } from '@material-ui/core';
import { SendTweet } from './components/SendTweet/SendTweet.jsx';

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet />
    </Container>
  );
}

export default App;
