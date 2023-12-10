import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Image,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconMoonStars, IconSun, IconUserPlus } from '@tabler/icons-react';
import cx from 'clsx';

import AppIcon from '/vite.svg';
import styles from '../styles/Header.module.css';
import { NewUserModal } from './Modals/NewUserModal';

export const Header = () => {
  // Manage dark-light theme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  // Manage modal
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <NewUserModal opened={opened} onClose={close} />

      <header className={styles.header}>
        <Container className={styles.inner} fluid>
          <Flex
            justify={{ lg: 'space-between', sm: 'space-between', xs: 'center' }}
            align={'center'}
            style={{ width: '100%' }}
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'xl' }}
          >
            {/* Logo, appTitle */}
            <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="nowrap"
            >
              <Image src={AppIcon} alt="WeatherIcon" style={{ width: '45px' }} />
              <Title
                fz={24}
                fw={500}
                order={1}
                style={{ color: 'var(--mantine-color-bright)' }}
              >
                WeatherApp / Inprodi ● Oscar Diaz
              </Title>
            </Flex>

            {/* ThemeSelector, addUserButton */}
            <Flex gap={{ lg: 'xl', md: 'lg', base: 'xs' }}>
              <ActionIcon
                radius={'xl'}
                onClick={() =>
                  setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
                }
                variant="light"
                size="xl"
                aria-label="Toggle color scheme"
              >
                <IconSun className={cx(styles.icon, styles.light)} stroke={1.5} />
                <IconMoonStars className={cx(styles.icon, styles.dark)} stroke={1.5} />
              </ActionIcon>
              <Button
                variant="filled"
                fz={18}
                fw={400}
                radius={'xl'}
                size="44"
                onClick={open}
              >
                <IconUserPlus
                  style={{ width: '1.5rem', height: '1.5rem', marginRight: '.5rem' }}
                  stroke={1.5}
                />
                Añadir usuario
              </Button>
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};
