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

interface TodayProps {
  weatherInfo: IWeather | undefined;
}

export const Today = ({ weatherInfo }: TodayProps) => {
  if (!weatherInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <GridCol span={{ xl: 4, lg: 4, md: 5, sm: 12, xs: 12 }}>
      <Text>Día de hoy</Text>
      <Box style={{ borderRadius: '25px' }} h={'100%'}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1532249991072-89f3389e8e80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmluZyUyMG5pZ2h0fGVufDB8fDB8fHww"
          radius="lg"
          style={{ overflow: 'hidden' }}
          h={'100%'}
        >
          <Grid p={'lg'}>
            {/* Hora y ciudad */}
            <GridCol span={12}>
              <Flex direction={'row'} align={'center'} justify={'space-between'}>
                <Text c={'white'}>{weatherInfo.location.localtime.split(' ')[0]}</Text>
                <Text c={'white'}>
                  {weatherInfo.location.country}/{weatherInfo.location.name}
                </Text>
              </Flex>
            </GridCol>
            {/* Icono */}
            <GridCol span={12} mb={'xl'}>
              {/* Temperatura - Icono*/}
              <Flex direction={'row'} align={'center'} justify={'space-between'}>
                <Text c={'white'} size="72px" fw={600}>
                  {weatherInfo.current.temp_c} °C
                </Text>
                <Paper radius={'xl'}>
                  <Image src={weatherInfo.current.condition.icon} h={64} w={64} />
                </Paper>
              </Flex>
              <Text c={'gray'} size="xl">
                {weatherInfo.current.condition.text}
              </Text>
            </GridCol>

            <Flex gap={'md'} direction={'column'}>
              {/* Humedad */}
              <Box
                display={'flex'}
                style={{
                  alignItems: 'center',
                  gap: '1rem',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(0, 0, 0, 0.30)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <IconDroplet color="white" />
                <Text size="lg" c={'dimmed'}>
                  Humedad
                </Text>
                <Text c={'white'} size="xl" fw={600}>
                  {weatherInfo.current.humidity} %
                </Text>
              </Box>
              {/* Viento */}
              <Box
                display={'flex'}
                style={{
                  alignItems: 'center',
                  gap: '1rem',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(0, 0, 0, 0.30)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <IconWind color="white" />
                <Text size="lg" c={'dimmed'}>
                  Viento
                </Text>
                <Text c={'white'} size="xl" fw={600}>
                  {weatherInfo.current.wind_kph} KM/H - {weatherInfo.current.wind_dir}/
                  {weatherInfo.current.wind_degree} °
                </Text>
              </Box>
              {/* UV */}
              <Box
                display={'flex'}
                style={{
                  alignItems: 'center',
                  gap: '1rem',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(0, 0, 0, 0.30)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <IconUvIndex color="white" />
                <Text size="lg" c={'dimmed'}>
                  UV Indice
                </Text>
                <Text c={'white'} size="xl" fw={600}>
                  {weatherInfo.current.uv}
                </Text>
              </Box>
              {/* UV */}
              <Box
                display={'flex'}
                style={{
                  alignItems: 'center',
                  gap: '1rem',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(0, 0, 0, 0.30)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <IconEyeCheck color="white" />
                <Text size="lg" c={'dimmed'}>
                  Visibilidad
                </Text>
                <Text c={'white'} size="xl" fw={600}>
                  {weatherInfo.current.vis_km} KM
                </Text>
              </Box>
            </Flex>
          </Grid>
        </BackgroundImage>
      </Box>
    </GridCol>
  );
};