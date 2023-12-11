import { Grid, GridCol } from '@mantine/core';
import { Forecast, MapForecast, Today, UserForecast } from '../components';
import { WeatherInterface } from '../interfaces/WeatherInterface';

interface UserDetailsLayoutProps {
  weatherInfo: WeatherInterface;
}

export const UserDetailsLayout = ({ weatherInfo }: UserDetailsLayoutProps) => {
  return (
    <Grid pb={50}>
      {/* Día de hoy */}
      <Today weatherInfo={weatherInfo} />
      {/* 5 days, user, map */}
      <GridCol span={{ xl: 8, lg: 8, md: 7, sm: 12, xs: 12 }} mt={16}>
        <Forecast weatherInfo={weatherInfo} />
        {/* User & Map */}
        <Grid mt={16}>
          {/* User TODO: MANDAR USUAIO*/}
          <UserForecast />
          {/* Map TODO: MANDAR USUAIO**/}
          <MapForecast />
        </Grid>
      </GridCol>
    </Grid>
  );
};
