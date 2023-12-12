import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridCol,
  Modal,
  Paper,
  Text,
  rem,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconMapPin, IconUserMinus } from '@tabler/icons-react';
import { IDeleteUserModal } from '../../interfaces/IDeleteUserModal';
import { useDispatch } from 'react-redux';
import { deleteUserById } from '../../redux/slices/userSlice';

export const DeleteUserModal = ({ ...props }: IDeleteUserModal) => {
  const { opened, onClose, avatar, id, lat, long, name } = props;
  const dispatch = useDispatch();

  const handleKeepUser = () => {
    onClose();
    notifications.show({
      title: '¡Rescate exitoso!',
      color: 'green',
      message: 'El usuario sigue siendo parte de la lista. ¡Misión cumplida!',
      icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
      withBorder: true,
      style: { borderRadius: '50px' },
    });
  };

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUserById(id));
    notifications.show({
      title: '¡Usuario eliminado!',
      color: 'green',
      message: 'El usuario ya no sigue siendo parte de la lista.',
      icon: <IconUserMinus style={{ width: rem(20), height: rem(20) }} />,
      withBorder: true,
      style: { borderRadius: '50px' },
    });
  };

  return (
    <Modal
      centered
      onClose={onClose}
      opened={opened}
      radius={'lg'}
      title="Borrar usuario"
      size={'md'}
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 2,
      }}
    >
      <Grid>
        <GridCol span={12}>
          <Text ta={'center'} size="xl">
            ¿Estás seguro de borrar el siguiente usuario?
          </Text>
        </GridCol>

        <GridCol span={12}>
          <Paper radius="md" withBorder p="lg" style={{ borderRadius: '25px' }}>
            <Avatar src={avatar} size={120} radius={120} mx="auto" />
            <Text ta="center" fz="lg" fw={500} mt="md">
              {name}
            </Text>
            <Flex gap={'xs'} align={'center'} justify={'center'}>
              <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
              <Text ta="center" c="dimmed" fz="sm">
                {lat}, {long}
              </Text>
            </Flex>
          </Paper>
        </GridCol>

        {/* Buttons */}
        <GridCol span={12}>
          <Button
            fullWidth
            fw={400}
            fz={16}
            radius={'xl'}
            size="44"
            variant="filled"
            onClick={() => handleDeleteUser(id)}
          >
            Sí, eliminar usuario
          </Button>
        </GridCol>
        <GridCol span={12}>
          <Button
            fullWidth
            fw={400}
            fz={16}
            radius={'xl'}
            size="44"
            type="submit"
            variant="light"
            onClick={handleKeepUser}
          >
            No, mantener usuario
          </Button>
        </GridCol>
      </Grid>
    </Modal>
  );
};
