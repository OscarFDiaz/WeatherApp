import { Container, Flex, Image, Title } from '@mantine/core';
import styles from '../styles/Header.module.css';
import AppIcon from '/vite.svg';
import { ThemeSelector } from './ThemeSelector';
export const HeaderUser = () => {
  return (
    <>
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
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};
