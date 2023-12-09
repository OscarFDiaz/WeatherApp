import {
  ActionIcon,
  ActionIconGroup,
  Avatar,
  Button,
  Flex,
  Paper,
  Text,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconMapPin, IconPencil, IconTrash } from '@tabler/icons-react';

interface Props {
  avatar: string;
  name: string;
  lat: string;
  long: string;
}

export const UserInfo = ({ avatar, name, lat, long }: Props) => {
  const clicked = () => {
    notifications.show({
      title: 'Default notification',
      message: `${name} ${lat} ${long}`,
    });
  };
  return (
    <>
      <Paper radius="md" withBorder p="lg" style={{ borderRadius: '25px' }}>
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {name}
        </Text>
        <Flex gap={'xs'} align={'center'}>
          <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
          <Text ta="center" c="dimmed" fz="sm">
            {lat}, {long}
          </Text>
        </Flex>

        <Flex gap={'xs'} align={'center'} mt={'lg'}>
          <Button variant="default" fullWidth radius={'xl'}>
            Detalles
          </Button>
          <ActionIconGroup>
            <ActionIcon
              variant="subtle"
              color="gray"
              size={36}
              radius={'xl'}
              onClick={clicked}
            >
              <IconPencil style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="red"
              size={36}
              radius={'xl'}
              onClick={clicked}
            >
              <IconTrash style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
            </ActionIcon>
          </ActionIconGroup>
        </Flex>
      </Paper>
    </>
  );
};
