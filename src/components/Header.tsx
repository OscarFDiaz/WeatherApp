import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun, IconUserPlus } from '@tabler/icons-react';
import cx from 'clsx';
import AppIcon from '/vite.svg';
import styles from '../styles/Header.module.css';

export const Header = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <header className={styles.header}>
      <Container className={styles.inner} fluid>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Image src={AppIcon} alt="WeatherIcon" style={{ width: '45px' }} />
          <Title fz={24} fw={500} order={1} c={'white'} lightHidden>
            WeatherApp / Inprodi ● Oscar Diaz
          </Title>
          <Title fz={24} fw={500} order={1} c={'black'} darkHidden>
            WeatherApp / Inprodi ● Oscar Diaz
          </Title>
        </Flex>

        <Group gap={'xl'}>
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
          <Button variant="filled" fz={18} fw={400} radius={'xl'} size="44">
            <IconUserPlus
              style={{ width: '1.5rem', height: '1.5rem', marginRight: '.5rem' }}
              stroke={1.5}
            />
            Añadir usuario
          </Button>
        </Group>
      </Container>
    </header>
  );
};
