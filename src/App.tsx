import { Container, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function App() {
  const handleOnClick = () => {
    notifications.show({
      title: 'Default notification',
      message: 'Hey there, your code is awesome! 🤥',
    });
  };

  return (
    <>
      <Container>
        <Button variant="filled" onClick={handleOnClick}>
          Mantine Test
        </Button>
      </Container>
    </>
  );
}

export default App;
