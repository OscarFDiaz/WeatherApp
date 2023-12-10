import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import cx from 'clsx';

import styles from '../styles/Header.module.css';

export const ThemeSelector = () => {
  // Manage dark-light theme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      radius={'xl'}
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="light"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(styles.icon, styles.light)} stroke={1.5} />
      <IconMoonStars className={cx(styles.icon, styles.dark)} stroke={1.5} />
    </ActionIcon>
  );
};
