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
} from '@mantine/core';
import { IconUser, IconWorldLatitude, IconWorldLongitude } from '@tabler/icons-react';

import { MapContainer } from '../MapContainer';
import { ImageSelect } from '../ImageSelect';
import { useFormAddUser } from '../../hooks/useFormAddUser';

interface NewUserModalProps {
  opened: boolean;
  onClose: () => void;
}

export const NewUserModal = ({ opened, onClose }: NewUserModalProps) => {
  const { anchor, form, handleDragEnd, handleSubmit } = useFormAddUser();
  // direction={{ base: 'column', sm: 'row' }} gap={'lg'}
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
              {...form.getInputProps('usuario')}
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
              <MapContainer anchor={anchor} onDragEnd={handleDragEnd} />
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
            >
              Añadir usuario
            </Button>
          </GridCol>
        </Grid>
      </form>
    </Modal>
  );
};
