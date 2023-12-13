import { Flex, GridCol, Image, Paper, Text } from '@mantine/core';

import { SkeletonForecastLayout } from '../../layout/SkeletonForecastLayout';
import { IWeather } from '../../interfaces/IWeather';

interface ForecastProps {
  weatherInfo: IWeather | undefined;
}

export const Forecast = ({ weatherInfo }: ForecastProps) => {
  if (!weatherInfo) {
    return <SkeletonForecastLayout />;
  }

  return (
    <GridCol span={12} p={0} m={0}>
      <Text>Próximos 5 días</Text>
      <Flex
        gap={'md'}
        direction={{
          xl: 'row',
          lg: 'row',
          md: 'row',
          sm: 'column',
          xs: 'column',
          base: 'column',
        }}
      >
        {weatherInfo.forecast.forecastday.slice(1).map((item) => (
          <Paper
            key={item.date}
            radius="lg"
            withBorder
            p="xs"
            style={{ height: '100%', flexGrow: '1' }}
          >
            <Flex direction={'column'} align={'center'} justify={'center'} wrap={'wrap'}>
              <Text>{item.date}</Text>
              <Paper radius={'xl'}>
                <Image src={item.day.condition.icon} h={64} w={64} />
              </Paper>
              <Text size="xl">{item.day.avgtemp_c} °C</Text>
            </Flex>
          </Paper>
        ))}
      </Flex>
    </GridCol>
  );
};
