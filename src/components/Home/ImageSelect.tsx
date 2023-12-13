import { UseFormReturnType } from '@mantine/form';
import { Avatar, Flex, Select } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';

import { avatarsData } from '../../data/avatarsData';

interface Props {
  form: UseFormReturnType<{ name: string; lat: string; long: string; avatar: string }>;
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
        data={avatarsData.map((option) => ({ value: option.value, label: option.label }))}
        {...form.getInputProps('avatar')}
      />
      <Avatar
        src={form.values.avatar}
        alt="User avatar image"
        size={89}
        style={{ border: '1px solid var(--mantine-color-gray-4)' }}
      />
    </Flex>
  );
};
