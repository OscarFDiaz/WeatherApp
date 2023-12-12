import { Container } from '@mantine/core';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <Container size={'lg'}>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
