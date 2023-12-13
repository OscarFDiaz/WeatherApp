import { useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Flex,
  Grid,
  GridCol,
  Image,
  Paper,
  Text,
} from '@mantine/core';
import { IconDroplet, IconEyeCheck, IconUvIndex, IconWind } from '@tabler/icons-react';

import { IWeather } from '../../interfaces/IWeather';
import { SkeletonDayLayout } from '../../layout/SkeletonDayLayout';
import { BoxWeatherInfo } from '..';

interface TodayProps {
  weatherInfo: IWeather | undefined;
}

export const Today = ({ weatherInfo }: TodayProps) => {
  const [imageSRC, setImageSRC] = useState('https://i.imgur.com/38Ey9lL.jpg');

  useEffect(() => {
    const conditionsMap: Record<string, string> = {
      cloudy: 'https://i.imgur.com/7hHoCj9.jpg',
      sunny: 'https://i.imgur.com/ku5mifb.jpg',
      clear: 'https://i.imgur.com/SYKakyW.jpg',
      fog: 'https://i.imgur.com/pRwAZLs.jpg',
      mist: 'https://i.imgur.com/pRwAZLs.jpg',
      rain: 'https://i.imgur.com/D3B3Rkn.jpg',
      drizzle: 'https://i.imgur.com/D3B3Rkn.jpg',
      snow: 'https://i.imgur.com/VzNafkc.jpg',
    };

    if (weatherInfo) {
      const condition = weatherInfo.current.condition.text.toLowerCase();
      const matchingCondition = Object.keys(conditionsMap).find((key) =>
        condition.includes(key),
      );

      matchingCondition
        ? setImageSRC(conditionsMap[matchingCondition])
        : setImageSRC('https://i.imgur.com/38Ey9lL.jpg');
    }
  }, [weatherInfo]);

  if (!weatherInfo) {
    return <SkeletonDayLayout />;
  }

  return (
    <GridCol span={{ xl: 4, lg: 4, md: 5, sm: 12, xs: 12 }}>
      <Text>Día de hoy</Text>
      <Box style={{ borderRadius: '25px' }} h={'100%'}>
        <BackgroundImage
          src={imageSRC}
          radius="lg"
          style={{ overflow: 'hidden' }}
          h={'100%'}
        >
          <Grid p={'lg'}>
            {/* Time and city*/}
            <GridCol span={12}>
              <Flex direction={'row'} align={'center'} justify={'space-between'}>
                <Text c={'white'}>{weatherInfo.location.localtime.split(' ')[0]}</Text>
                <Text c={'white'} ta={'end'}>
                  {weatherInfo.location.country}/{weatherInfo.location.name}
                </Text>
              </Flex>
            </GridCol>
            {/* Icon */}
            <GridCol span={12} mb={'xl'}>
              {/* Temperature - Icon*/}
              <Flex direction={'row'} align={'center'} justify={'space-between'}>
                <Text c={'white'} size="64px" fw={600}>
                  {weatherInfo.current.temp_c} °C
                </Text>
                <Paper radius={'xl'} p={'xs'}>
                  <Image src={weatherInfo.current.condition.icon} h={64} w={64} />
                </Paper>
              </Flex>
              <Text c={'gray'} size="xl">
                {weatherInfo.current.condition.text}
              </Text>
            </GridCol>

            <Flex gap={'md'} direction={'column'}>
              {/* humidity */}
              <BoxWeatherInfo
                children={<IconDroplet color="white" />}
                data={String(weatherInfo.current.humidity)}
                text={'Humedad'}
                decorator="%"
              />
              {/* wind */}
              <BoxWeatherInfo
                children={<IconWind color="white" />}
                data={`${weatherInfo.current.wind_kph} KM/H - ${weatherInfo.current.wind_dir}/
                ${weatherInfo.current.wind_degree} °`}
                text={'Viento'}
              />
              {/* UV */}
              <BoxWeatherInfo
                children={<IconUvIndex color="white" />}
                data={String(weatherInfo.current.uv)}
                text={'UV Indice'}
              />
              {/* Visibility */}
              <BoxWeatherInfo
                children={<IconEyeCheck color="white" />}
                data={String(weatherInfo.current.vis_km)}
                text={'Visibilidad'}
                decorator="KM"
              />
            </Flex>
          </Grid>
        </BackgroundImage>
      </Box>
    </GridCol>
  );
};
