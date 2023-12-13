import { ActionIcon, Flex, Group, Image, Title, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

import AppIcon from '/vite.svg';

export const Footer = () => {
  return (
    <Flex
      mt={'xl'}
      pb={'xl'}
      gap={'lg'}
      justify={'space-between'}
      style={{ width: '100%' }}
    >
      <Flex direction={'row'} gap={'lg'} justify={'center'} align={'center'}>
        <Image src={AppIcon} alt="WeatherIcon" style={{ width: '45px' }} />
        <Title
          fz={18}
          ta={'left'}
          fw={500}
          order={1}
          style={{ color: 'var(--mantine-color-bright)' }}
        >
          WeatherApp / Inprodi ● Oscar Diaz
        </Title>
      </Flex>

      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <a
          href="https://twitter.com/OscarOFDA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <ActionIcon size="lg" variant="light" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </a>
        <a
          href="https://github.com/OscarFDiaz"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
        >
          <ActionIcon size="lg" variant="light" radius="xl">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </a>
      </Group>
    </Flex>
  );
};
