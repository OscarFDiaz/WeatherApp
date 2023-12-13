import { Flex } from '@mantine/core';
import { Footer, Header, UsersList } from '../components';

export const Home = () => {
  return (
    <Flex direction={'column'} h={'100vh'} justify={'space-between'}>
      <Header />
      <UsersList />
      <Footer />
    </Flex>
  );
};
