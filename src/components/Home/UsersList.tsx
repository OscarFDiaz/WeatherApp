import { useEffect } from 'react';
import { Flex, Grid, GridCol, Text } from '@mantine/core';

import { useDispatch, useSelector } from 'react-redux';

import { IUserSlice } from '../../interfaces/IUserSlice';
import { setUsers } from '../../redux/slices/userSlice';
import { usersDefault } from '../../data/usersDefault';
import { UserInfo } from './UserInfo';

export const UsersList = () => {
  // Load users from store
  const { users } = useSelector((state: IUserSlice) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) dispatch(setUsers(usersDefault));
  });

  return (
    <>
      <Text fz={24} mb={16}>
        Usuarios registrados
      </Text>
      <Flex gap={'lg'} wrap={'wrap'} justify={'flex-start'}>
        <Grid>
          {users.map((user) => (
            <GridCol key={user.id} span={{ xl: 4, md: 6, xs: 6, base: 12 }}>
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
      </Flex>
    </>
  );
};
