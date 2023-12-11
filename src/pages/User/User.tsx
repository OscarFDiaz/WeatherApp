import {
  Avatar,
  Flex,
  Grid,
  GridCol,
  Image,
  Paper,
  Text,
  BackgroundImage,
  Box,
} from '@mantine/core';
import {
  IconDroplet,
  IconEyeCheck,
  IconMapPin,
  IconUvIndex,
  IconWind,
} from '@tabler/icons-react';
import { Footer, HeaderUser, MapContainer } from '../../components';

const data = {
  location: {
    name: 'Monterrey',
    region: 'Nuevo LeÃ³n',
    country: 'Mexico',
    lat: 25.68,
    lon: -100.32,
    tz_id: 'America/Monterrey',
    localtime_epoch: 1702256340,
    localtime: '2023-12-10 18:59',
  },
  current: {
    temp_c: 14.1,
    is_day: 0,
    condition: {
      text: 'Clear',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
    },
    wind_kph: 7.2,
    wind_degree: 53,
    wind_dir: 'NE',
    humidity: 32,
    cloud: 3,
    feelslike_c: 13.9,
    vis_km: 10,
    uv: 1,
    gust_kph: 8.3,
  },
  forecast: {
    forecastday: [
      {
        date: '2023-12-10',
        day: {
          maxtemp_c: 15.7,
          mintemp_c: 9.8,
          avgtemp_c: 13.2,
          maxwind_kph: 13,
          totalsnow_cm: 0,
          avgvis_km: 10,
          avghumidity: 34,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
          uv: 4,
        },
      },
      {
        date: '2023-12-11',
        day: {
          maxtemp_c: 16.6,
          mintemp_c: 8.9,
          avgtemp_c: 12.6,
          maxwind_kph: 11.2,
          totalsnow_cm: 0,
          avgvis_km: 10,
          avghumidity: 46,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
          uv: 4,
        },
      },
      {
        date: '2023-12-12',
        day: {
          maxtemp_c: 18,
          mintemp_c: 8,
          avgtemp_c: 13.3,
          maxwind_kph: 13.7,
          totalsnow_cm: 0,
          avgvis_km: 10,
          avghumidity: 68,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          },
          uv: 4,
        },
      },
      {
        date: '2023-12-13',
        day: {
          maxtemp_c: 17.3,
          mintemp_c: 14.3,
          avgtemp_c: 15.5,
          maxwind_kph: 9.4,
          totalsnow_cm: 0,
          avgvis_km: 10,
          avghumidity: 87,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 88,
          condition: {
            text: 'Patchy rain possible',
            icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
          },
          uv: 4,
        },
      },
      {
        date: '2023-12-14',
        day: {
          maxtemp_c: 19.2,
          mintemp_c: 14.7,
          avgtemp_c: 16.7,
          maxwind_kph: 8.3,
          totalsnow_cm: 0,
          avgvis_km: 9.7,
          avghumidity: 87,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 85,
          condition: {
            text: 'Patchy rain possible',
            icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
          },
          uv: 4,
        },
      },
    ],
  },
};

const user = {
  id: 3,
  avatar:
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  name: 'Henry Silkeater',
  lat: '25.675913491548233',
  long: '-100.31870493417969',
};

export const User = () => {
  const lat = '25.675913491548233';
  const long = '-100.31870493417969';
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getWeatherData({ lat, long });
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error al obtener datos:', error);
  //       notifications.show({
  //         title: 'Error al hacer la solicitud a la API',
  //         message: `Error: ${error}`,
  //       });
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(data);

  //      DÍA DE HOY
  // - [X] Icono que haga referencia al clima actual.
  // - [X] Nombre de la ciudad.
  // - [X] Temperatura.
  // - [X] Humedad.
  // - [X] Velocidad del viento.

  //   [X] Información del usuario.
  // - [x] Pronóstico de los próximos 5 días. (O el máximo que permita la API que se esté
  //   usando).
  return (
    <>
      <HeaderUser />
      {/* Contenedor principal */}
      <Grid pb={50}>
        {/* Día de hoy */}
        <GridCol span={4}>
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
                    <Text c={'white'}>{data.location.localtime.split(' ')[0]}</Text>
                    <Text c={'white'}>
                      {data.location.country}/{data.location.name}
                    </Text>
                  </Flex>
                </GridCol>
                {/* Icono */}
                <GridCol span={12} mb={'xl'}>
                  {/* Temperatura - Icono*/}
                  <Flex direction={'row'} align={'center'} justify={'space-between'}>
                    <Text c={'white'} size="72px" fw={600}>
                      {data.current.temp_c} °C
                    </Text>
                    <Paper radius={'xl'}>
                      <Image src={data.current.condition.icon} h={64} w={64} />
                    </Paper>
                  </Flex>
                  <Text c={'gray'} size="xl">
                    {data.current.condition.text}
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
                      {data.current.humidity} %
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
                      {data.current.wind_kph} KM/H - {data.current.wind_dir}/
                      {data.current.wind_degree} °
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
                      {data.current.uv}
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
                      {data.current.vis_km} KM
                    </Text>
                  </Box>
                </Flex>
              </Grid>
            </BackgroundImage>
          </Box>
        </GridCol>
        <GridCol span={8}>
          {/* Next 5 days */}
          <GridCol span={12} p={0} m={0}>
            <Text>Próximos 5 días</Text>
            <Flex gap={'md'} direction={'row'}>
              {Array.from(data.forecast.forecastday).map((item) => (
                <Paper
                  radius="lg"
                  withBorder
                  p="xs"
                  style={{ height: '100%', flexGrow: '1' }}
                >
                  <Flex direction={'column'} align={'center'} justify={'center'}>
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
          {/* User & Map */}
          <Grid mt={16}>
            {/* User */}
            <GridCol span={6} p={8} m={0}>
              <Text>Infomación del usuario</Text>
              <Paper withBorder p="lg" m={0} style={{ borderRadius: '25px' }} h={'100%'}>
                <Avatar src={user.avatar} size={140} radius={120} mx="auto" />
                <Text ta="center" fz="lg" fw={500} mt="md">
                  {user.name}
                </Text>
                <Flex gap={'xs'} align={'center'} justify={'center'}>
                  <IconMapPin style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
                  <Text ta="center" c="dimmed" fz="sm">
                    {lat}, {long}
                  </Text>
                </Flex>
              </Paper>
            </GridCol>
            {/* Map */}
            <GridCol span={6} m={0}>
              <Text>Ubicación</Text>
              <MapContainer
                height="100%"
                anchor={[Number(lat), Number(long)]}
                defaultCenter={[Number(lat), Number(long)]}
              />
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>

      <Footer />
    </>
  );
};
