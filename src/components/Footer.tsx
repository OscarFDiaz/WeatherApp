import { ActionIcon, Group, Image, Title, rem } from '@mantine/core';
import styles from '../styles/Footer.module.css';
import AppIcon from '/vite.svg';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <Image src={AppIcon} alt="WeatherIcon" style={{ width: '45px' }} />
        <Title fz={18} ta={'left'} fw={500} order={1}>
          WeatherApp / Inprodi ● Oscar Diaz
        </Title>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <a
            href="https://twitter.com/OscarOFDA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
          >
            <ActionIcon size="lg" variant="light" radius="xl">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
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
      </div>
    </div>
  );
};
