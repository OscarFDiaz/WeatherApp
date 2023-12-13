/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import {
  Button,
  Container,
  Grid,
  GridCol,
  Modal,
  Space,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';

import {
  IconInfoCircle,
  IconUser,
  IconUserEdit,
  IconWorldLatitude,
  IconWorldLongitude,
} from '@tabler/icons-react';

import { useFormAddUser } from '../../hooks/useFormAddUser';

import { IEditUserModal } from '../../interfaces/IEditUserModal';
import { IFormValues } from '../../interfaces/IFormValues';

import { ImageSelect } from '../Home/ImageSelect';
import { MapContainer } from '../MapContainer';

export const EditUserModal = ({ ...props }: IEditUserModal) => {
  const { opened, onClose, avatar, id, lat, long, name } = props;

  const { anchor, setAnchor, form, handleDragEnd, handleEditSubmit } = useFormAddUser();

  // Set form with user data
  useEffect(() => {
    form.setFieldValue('avatar', avatar);
    form.setFieldValue('lat', lat);
    form.setFieldValue('long', long);
    form.setFieldValue('name', name);
    setAnchor([Number(lat), Number(long)]);
  }, []);

  // Handle user discard changes when edit
  const handleDiscardChanges = () => {
    onClose();
    notifications.show({
      title: 'Cambios descartados',
      color: 'yellow',
      message: 'Los cambios realizados se han descartado.',
      icon: <IconInfoCircle style={{ width: rem(20), height: rem(20) }} />,
      withBorder: true,
      style: { borderRadius: '50px' },
    });
  };

  // Func to close the modal when the form is valid
  const handleSubmit = (values: IFormValues) => {
    // Call the hook to update redux
    handleEditSubmit(values, id);

    const isFormValid = form.isValid();
    if (isFormValid) {
      onClose();
      notifications.show({
        title: '¡Cambios guardados!',
        color: 'green',
        message: 'Los cambios realizados han sido guardados.',
        icon: <IconUserEdit style={{ width: rem(20), height: rem(20) }} />,
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
      title="Modificar usuario"
      size={'xl'}
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 2,
      }}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid>
          <GridCol span={12}>
            <Text ta={'left'} size="xl">
              Actualiza la información y guarda los cambios
            </Text>
          </GridCol>

          {/* Name and avatar*/}
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
                defaultCenter={[Number(lat), Number(long)]}
              />
            </Container>
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
              type="submit"
            >
              Guardar cambios
            </Button>
          </GridCol>
          <GridCol span={12}>
            <Button
              fullWidth
              fw={400}
              fz={16}
              radius={'xl'}
              size="44"
              variant="light"
              onClick={handleDiscardChanges}
            >
              Descartar cambios
            </Button>
          </GridCol>
        </Grid>
      </form>
    </Modal>
  );
};
