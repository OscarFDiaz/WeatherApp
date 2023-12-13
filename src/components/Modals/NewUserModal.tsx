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
import { notifications } from '@mantine/notifications';

import {
  IconUser,
  IconUserPlus,
  IconWorldLatitude,
  IconWorldLongitude,
} from '@tabler/icons-react';

import { useFormAddUser } from '../../hooks/useFormAddUser';
import { IFormValues } from '../../interfaces/IFormValues';
import { ImageSelect, MapContainer } from '..';

interface INewUserModal {
  opened: boolean;
  onClose: () => void;
}

export const NewUserModal = ({ opened, onClose }: INewUserModal) => {
  const { anchor, form, handleDragEnd, handleSubmit } = useFormAddUser();

  // Func to close the modal when the form is valid
  const handleSubmitUser = (values: IFormValues) => {
    // Call the hook to update redux
    handleSubmit(values);

    const isFormValid = form.isValid();
    if (isFormValid) {
      onClose();
      notifications.show({
        title: '¡Usuario agregado!',
        color: 'green',
        message: 'Los cambios realizados han sido guardados.',
        icon: <IconUserPlus style={{ width: rem(20), height: rem(20) }} />,
        withBorder: true,
        style: { borderRadius: '50px' },
      });
    }
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
      <form onSubmit={form.onSubmit((values) => handleSubmitUser(values))}>
        <Grid>
          {/* name and avatar */}
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

          {/* Latitude y longitude */}
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

          {/* Map */}
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

          {/* Button */}
          <GridCol span={12}>
            <Button
              fullWidth
              fw={400}
              fz={16}
              radius={'xl'}
              size="44"
              type="submit"
              variant="filled"
            >
              Añadir usuario
            </Button>
          </GridCol>
        </Grid>
      </form>
    </Modal>
  );
};
