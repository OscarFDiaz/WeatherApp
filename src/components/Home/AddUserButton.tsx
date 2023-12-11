import { Button } from '@mantine/core';
import { IconUserPlus } from '@tabler/icons-react';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const AddUserButton = ({ onClick }: Props) => {
  return (
    <Button variant="filled" fz={18} fw={400} radius={'xl'} size="44" onClick={onClick}>
      <IconUserPlus
        style={{ width: '1.5rem', height: '1.5rem', marginRight: '.5rem' }}
        stroke={1.5}
      />
      Añadir usuario
    </Button>
  );
};
