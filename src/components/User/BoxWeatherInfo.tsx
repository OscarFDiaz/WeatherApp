import { Box, Text } from '@mantine/core';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  data: string;
  text: string;
  decorator?: string;
};

export const BoxWeatherInfo = ({ data, text, decorator, children }: Props) => {
  return (
    <Box
      display={'flex'}
      style={{
        alignItems: 'center',
        gap: '1rem',
        borderRadius: '25px',
        backdropFilter: 'blur(20px)',
      }}
    >
      {children}
      {/* <IconDroplet color="white" /> */}
      <Text size="lg" c={'dimmed'}>
        {text}
      </Text>
      <Text c={'white'} size="xl" fw={600}>
        {data} {decorator}
      </Text>
    </Box>
  );
};
