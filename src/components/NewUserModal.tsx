import { Button, Modal, TextInput, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser, IconWorldLatitude, IconWorldLongitude } from '@tabler/icons-react';

interface NewUserModalProps {
  opened: boolean;
  onClose: () => void;
}

interface FormValues {
  usuario: string;
  lat: string;
  long: string;
}

const handleSubmit = (values: FormValues) => {
  console.log(values);
};

export const NewUserModal = ({ opened, onClose }: NewUserModalProps) => {
  const form = useForm({
    initialValues: {
      usuario: '',
      lat: '',
      long: '',
    },
  });

  return (
    <Modal
      centered
      onClose={onClose}
      opened={opened}
      radius={'lg'}
      title="Añadir un nuevo usuario"
    >
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
          onClick={() => handleSubmit(form.values)}
        >
          Submit
        </Button>
      </Flex>
    </Modal>
  );
};
