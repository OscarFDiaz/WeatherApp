import { Button, Text } from '@mantine/core';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

export const BackIcon = () => {
  return (
    <Button
      radius={'xl'}
      onClick={() => console.log('BackButton')}
      variant="default"
      size="md"
      aria-label="Toggle color scheme"
    >
      <IconArrowNarrowLeft stroke={1.5} />
      <Text ml={16}>Volver</Text>
    </Button>
  );
};
