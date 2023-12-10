import { Avatar, Flex, Select } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import { UseFormReturnType } from '@mantine/form';

const options = [
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    label: 'Hombre 1',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    label: 'Hombre 2',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    label: 'Hombre 3',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
    label: 'Hombre 4',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    label: 'Hombre 5',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    label: 'Mujer 1',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    label: 'Mujer 2',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
    label: 'Mujer 3',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    label: 'Mujer 4',
  },
  {
    value:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    label: 'Mujer 5',
  },
];

interface Props {
  form: UseFormReturnType<{ usuario: string; lat: string; long: string; img: string }>;
}

export const ImageSelect = ({ form }: Props) => {
  return (
    <Flex align={'flex-end'} gap={'xs'} justify={'space-between'}>
      <Select
        allowDeselect={false}
        checkIconPosition="right"
        description="Elige un avatar para el usuario"
        id="image-selector"
        label="Selecciona un avatar"
        leftSection={<IconUserCircle />}
        placeholder="Elige un avatar"
        radius={'xl'}
        size="md"
        style={{ flexGrow: 1 }}
        withAsterisk
        withCheckIcon
        data={options.map((option) => ({ value: option.value, label: option.label }))}
        {...form.getInputProps('img')}
      />
      <Avatar
        src={form.values.img}
        alt="User avatar image"
        size={89}
        style={{ border: '1px solid var(--mantine-color-gray-4)' }}
      />
    </Flex>
  );
};
