import { Avatar, Flex, GridCol, Paper, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';

const user = {
  id: 3,
  avatar:
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  name: 'Henry Silkeater',
  lat: '25.675913491548233',
  long: '-100.31870493417969',
};

export const UserForecast = () => {
  return (
    <GridCol span={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} p={8} m={0}>
      <Text>Información del usuario</Text>
      <Paper
        withBorder
        p="lg"
        m={0}
        style={{
          borderRadius: '25px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        h={'100%'}
      >
        <Avatar src={user.avatar} size={140} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {user.name}
        </Text>
        <Flex gap={'xs'} align={'center'} justify={'center'}>
          <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
          <Text ta="center" c="dimmed" fz="sm" truncate={'end'}>
            {user.lat}, {user.long}
          </Text>
        </Flex>
      </Paper>
    </GridCol>
  );
};
