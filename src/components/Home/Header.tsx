import { Container, Flex, Image, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import AppIcon from '/vite.svg';
import styles from '../../styles/Header.module.css';
import { AddUserButton, NewUserModal, ThemeSelector } from '..';

export const Header = () => {
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
              <ThemeSelector />
              <AddUserButton onClick={open} />
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};
