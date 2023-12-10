/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, TextInput, Flex, Text, Container } from '@mantine/core';
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

  return (
    <Modal
      centered
      onClose={onClose}
      opened={opened}
      radius={'lg'}
      title="Añadir un nuevo usuario"
      size={'xl'}
    >
      <Container style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} p={0}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Flex direction={'column'} gap={'lg'}>
            <TextInput
              description="Nombre del usuario"
              error="Completa este campo"
              label="Usuario"
              leftSection={<IconUser />}
              placeholder="Oscar Diaz"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('usuario')}
            />

            <TextInput
              description="Coordenadas Latitud"
              error="Completa este campo"
              label="Latitud"
              leftSection={<IconWorldLatitude />}
              placeholder="20.6637808"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('lat')}
            />

            <TextInput
              description="Coordenadas Longitud"
              error="Completa este campo"
              label="Longitud"
              leftSection={<IconWorldLongitude />}
              placeholder="-103.4315425"
              radius={'xl'}
              size="md"
              withAsterisk
              {...form.getInputProps('long')}
            />

            <Button
              fw={400}
              fz={16}
              radius={'xl'}
              size="44"
              variant="filled"
              type="submit"
            >
              Añadir usuario
            </Button>
          </Flex>
        </form>
        <Container style={{ width: '100%', height: '100%' }}>
          <ImageSelect form={form} />
          <Text c={'dimmed'} size="sm">
            Posición en el mapa
          </Text>
          <MapContainer anchor={anchor} onDragEnd={handleDragEnd} />
        </Container>
      </Container>
    </Modal>
  );
};
