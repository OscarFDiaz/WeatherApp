import { Avatar, Flex, GridCol, Paper, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { IUserSlice } from '../../interfaces/IUserSlice';
import { useSelector } from 'react-redux';

export const UserForecast = () => {
  const { id } = useParams();
  const { users } = useSelector((state: IUserSlice) => state.user);
  const userID = Number(id) - 1 || 0;

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
        <Avatar src={users[userID].avatar} size={140} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {users[userID].name}
        </Text>
        <Flex gap={'xs'} align={'center'} justify={'center'}>
          <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
          <Text ta="center" c="dimmed" fz="sm" truncate={'end'}>
            {users[userID].lat}, {users[userID].long}
          </Text>
        </Flex>
      </Paper>
    </GridCol>
  );
};
