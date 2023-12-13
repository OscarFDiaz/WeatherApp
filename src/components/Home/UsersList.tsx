import { useDispatch, useSelector } from 'react-redux';

import { Box, Grid, GridCol, Notification, Text } from '@mantine/core';

import { setUsers } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';

import { usersDefault } from '../../data/usersDefault';
import { UserInfo } from './UserInfo';
import { IconUserSearch } from '@tabler/icons-react';

export const UsersList = () => {
  // Load users from store, dirty means if user delete or add one user
  const { users, dirty, count } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (!dirty) {
    if (count === 0) dispatch(setUsers(usersDefault));
  } else {
    if (count === 0) {
      return (
        <Notification
          icon={<IconUserSearch />}
          color="teal"
          title="No hay usuarios registrados"
          withCloseButton={false}
        >
          Añade nuevos usuarios pulsando 'Añadir usuario'
        </Notification>
      );
    }
  }

  return (
    <Box>
      <Text fz={24} mb={16}>
        Usuarios registrados
      </Text>
      <Grid>
        {users.map((user) => (
          <GridCol key={user.id} span={{ xl: 4, lg: 4, md: 4, xs: 6, base: 12 }}>
            <UserInfo
              avatar={user.avatar}
              name={user.name}
              lat={user.lat}
              long={user.long}
              id={user.id}
            />
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
};
