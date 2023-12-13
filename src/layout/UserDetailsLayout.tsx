import { Grid, GridCol, Text } from '@mantine/core';
import { Forecast, MapForecast, Today, UserForecast } from '../components';
import { IWeather } from '../interfaces/IWeather';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../helpers/getWeatherData';
import { notifications } from '@mantine/notifications';
import { RootState } from '../redux/store';

export const UserDetailsLayout = () => {
  const { id } = useParams();
  const { users } = useSelector((state: RootState) => state.user);
  const userID = users.findIndex((user) => user.id == Number(id));

  const lat = users[userID].lat;
  const long = users[userID].long;

  const [data, setData] = useState<IWeather | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWeatherData({ lat, long });
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        notifications.show({
          title: 'Error al hacer la solicitud a la API',
          message: `Error: ${error}`,
        });
      }
    };

    fetchData();
  }, [lat, long, userID]);

  return (
    <>
      <Text fz={24} mb={16}>
        Pronostico del tiempo
      </Text>
      <Grid pb={50}>
        {/* Día de hoy */}
        <Today weatherInfo={data} />
        {/* 5 days, user, map */}
        <GridCol span={{ xl: 8, lg: 8, md: 7, sm: 12, xs: 12 }} mt={16}>
          <Forecast weatherInfo={data} />
          {/* User & Map */}
          <Grid mt={16}>
            {/* User */}
            <UserForecast />
            {/* Map */}
            <MapForecast />
          </Grid>
        </GridCol>
      </Grid>
    </>
  );
};
