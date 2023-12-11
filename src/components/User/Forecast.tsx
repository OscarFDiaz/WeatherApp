import { Flex, GridCol, Image, Paper, Text } from '@mantine/core';
import { WeatherInterface } from '../../interfaces/WeatherInterface';

interface ForecastProps {
  weatherInfo: WeatherInterface;
}

export const Forecast = ({ weatherInfo }: ForecastProps) => {
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
        {Array.from(weatherInfo.forecast.forecastday).map((item) => (
          <Paper radius="lg" withBorder p="xs" style={{ height: '100%', flexGrow: '1' }}>
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