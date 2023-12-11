import { Container, Flex, Image, Title } from '@mantine/core';

import styles from '../../styles/Header.module.css';
import AppIcon from '/vite.svg';
import { BackIcon, ThemeSelector } from '..';

export const HeaderUser = () => {
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.inner} fluid>
          <Flex
            justify={{
              lg: 'space-between',
              sm: 'space-between',
              xs: 'center',
            }}
            align={'center'}
            style={{ width: '100%' }}
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'xl' }}
          >
            {/* ThemeSelector, addUserButton */}
            <Flex gap={{ lg: 'xl', md: 'lg', base: 'xs' }}>
              <BackIcon />
              <ThemeSelector />
            </Flex>
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
          </Flex>
        </Container>
      </header>
    </>
  );
};
