import { Button, Text } from '@mantine/core';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const BackIcon = () => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };
  return (
    <Button
      radius={'xl'}
      onClick={onNavigateBack}
      variant="default"
      size="md"
      aria-label="Toggle color scheme"
    >
      <IconArrowNarrowLeft stroke={1.5} />
      <Text ml={16}>Volver</Text>
    </Button>
  );
};
