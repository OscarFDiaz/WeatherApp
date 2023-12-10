import { Flex, Grid, GridCol, Text } from '@mantine/core';
import { UserInfo } from './User';

import styles from '../styles/User.module.css';

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
    lat: '32.62511910171682',
    long: '-115.47119926336411',
  },
  {
    id: 3,
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    lat: '25.675913491548233',
    long: '-100.31870493417969',
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
    lat: '20.96239517597861',
    long: '-89.62545087333984',
  },
];

export const UsersList = () => {
  return (
    <>
      <Text fz={24} mb={16}>
        Usuarios registrados
      </Text>
      <Flex gap={'lg'} wrap={'wrap'} justify={'flex-start'} className={styles.container}>
        <Grid>
          {data.map((user) => (
            <GridCol key={user.id} span={{ xl: 4, md: 6, xs: 6, base: 12 }}>
              <UserInfo
                avatar={user.avatar}
                user={user.name}
                lat={user.lat}
                long={user.long}
                id={user.id}
              />
            </GridCol>
          ))}
        </Grid>
      </Flex>
    </>
  );
};
