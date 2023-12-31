import { Link } from 'react-router-dom';

import {
  ActionIcon,
  ActionIconGroup,
  Avatar,
  Button,
  Flex,
  Paper,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconMapPin, IconPencil, IconTrash } from '@tabler/icons-react';

import { User } from '../../interfaces/IUser';
import { DeleteUserModal, EditUserModal } from '..';

export const UserInfo = ({ avatar, name, lat, long, id }: User) => {
  // Manage modal
  const [deleteOpened, { open: openDelete, close: closeDelete }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);

  return (
    <>
      <DeleteUserModal
        opened={deleteOpened}
        onClose={closeDelete}
        id={id}
        avatar={avatar}
        name={name}
        lat={lat}
        long={long}
      />

      <EditUserModal
        opened={editOpened}
        onClose={closeEdit}
        id={id}
        avatar={avatar}
        name={name}
        lat={lat}
        long={long}
      />

      <Paper withBorder p="lg" style={{ borderRadius: '25px' }}>
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {name}
        </Text>
        <Flex gap={'xs'} align={'center'} justify={'center'}>
          <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
          <Text ta="center" c="dimmed" fz="sm" truncate={'end'}>
            {lat}, {long}
          </Text>
        </Flex>

        <Flex gap={'xs'} align={'center'} mt={'lg'}>
          <Link to={`/user/${id}`} style={{ textDecoration: 'none', width: '100%' }}>
            <Button variant="default" fullWidth radius={'xl'}>
              Detalles
            </Button>
          </Link>
          <ActionIconGroup>
            <ActionIcon
              variant="subtle"
              color="gray"
              size={36}
              radius={'xl'}
              onClick={openEdit}
            >
              <IconPencil style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="red"
              size={36}
              radius={'xl'}
              onClick={openDelete}
            >
              <IconTrash style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
            </ActionIcon>
          </ActionIconGroup>
        </Flex>
      </Paper>
    </>
  );
};
