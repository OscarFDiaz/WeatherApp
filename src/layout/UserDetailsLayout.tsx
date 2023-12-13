import { Grid, GridCol, Text } from '@mantine/core';
import { Forecast, MapForecast, Today, UserForecast } from '../components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getEnvironments } from '../helpers/getEnviroments';
import { useGetWeatherQuery } from '../redux/api/weatherApi';

export const UserDetailsLayout = () => {
  const { id } = useParams();
  const { users } = useSelector((state: RootState) => state.user);
  const userID = users.findIndex((user) => user.id == Number(id));

  const lat = users[userID].lat;
  const long = users[userID].long;
  const { VITE_APIKEY: key } = getEnvironments();

  const { data } = useGetWeatherQuery({ lat, long, key });

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
