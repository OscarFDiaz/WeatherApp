import { Flex, Text } from '@mantine/core';
import { UserInfo } from './User';

const data = [
  {
    id: 1,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    lat: '20.6637808',
    long: '-103.4315425',
  },
  {
    id: 2,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    lat: '30.3375651',
    long: '-118.1726157',
  },
  {
    id: 3,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    lat: '25.4622209',
    long: '-102.4562324',
  },
  {
    id: 4,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    name: 'Jane Fingerlicker',
    lat: '19.3909832',
    long: '-99.1436127',
  },
  {
    id: 5,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    lat: '20.9861177',
    long: '-89.7933357',
  },
];

export const UsersList = () => {
  return (
    <>
      <Text fz={24} mb={16}>
        Usuarios registrados
      </Text>
      <Flex gap={'lg'} wrap={'wrap'} justify={'space-between'}>
        {data.map((user) => (
          <UserInfo
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            lat={user.lat}
            long={user.long}
          />
        ))}
      </Flex>
    </>
  );
};
