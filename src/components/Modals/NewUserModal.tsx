/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Modal,
  TextInput,
  Text,
  Container,
  Grid,
  GridCol,
  Space,
  rem,
} from '@mantine/core';
import {
  IconUser,
  IconUserPlus,
  IconWorldLatitude,
  IconWorldLongitude,
} from '@tabler/icons-react';

import { useFormAddUser } from '../../hooks/useFormAddUser';
import { ImageSelect, MapContainer } from '..';
import { notifications } from '@mantine/notifications';

interface INewUserModal {
  opened: boolean;
  onClose: () => void;
}

export const NewUserModal = ({ opened, onClose }: INewUserModal) => {
  const { anchor, form, handleDragEnd, handleSubmit } = useFormAddUser();

  const handleSubmitUser = () => {
    onClose();
    notifications.show({
      title: '¡Usuario agregado!',
      color: 'green',
      message: 'Los cambios realizados han sido guardados.',
      icon: <IconUserPlus style={{ width: rem(20), height: rem(20) }} />,
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
      title="Añadir un nuevo usuario"
      size={'xl'}
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 2,
      }}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid>
          {/* Usuario y avatar */}
          <GridCol span={{ sm: 6, xs: 12 }}>
            <TextInput
              description="Nombre del usuario"
              label="Usuario"
              leftSection={<IconUser />}
              placeholder="Oscar Diaz"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('name')}
            />

            <Space h={'lg'} />

            <Container style={{ width: '100%', height: '100%' }} p={0}>
              <ImageSelect form={form} />
            </Container>
          </GridCol>

          {/* Latitud y longitud */}
          <GridCol span={{ sm: 6, xs: 12 }}>
            <TextInput
              description="Coordenadas Latitud"
              label="Latitud"
              leftSection={<IconWorldLatitude />}
              placeholder="20.6637808"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('lat')}
            />

            <Space h={'lg'} />

            <TextInput
              description="Coordenadas Longitud"
              label="Longitud"
              leftSection={<IconWorldLongitude />}
              placeholder="-103.4315425"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('long')}
            />
          </GridCol>

          {/* Mapa */}
          <GridCol span={12}>
            <Container style={{ height: '100%', minWidth: '100%' }} p={0} m={0}>
              <Text c={'dimmed'} size="sm">
                Posición en el mapa
              </Text>
              <MapContainer
                anchor={anchor}
                onDragEnd={handleDragEnd}
                defaultCenter={[20.6637808, -103.4315425]}
              />
            </Container>
          </GridCol>

          {/* Botón */}
          <GridCol span={12}>
            <Button
              fullWidth
              fw={400}
              fz={16}
              radius={'xl'}
              size="44"
              type="submit"
              variant="filled"
              onClick={handleSubmitUser}
            >
              Añadir usuario
            </Button>
          </GridCol>
        </Grid>
      </form>
    </Modal>
  );
};
