import { GridCol, Text } from '@mantine/core';
import { MapContainer } from '..';

export const MapForecast = () => {
  const lat = '25.675913491548233';
  const long = '-100.31870493417969';
  return (
    <GridCol span={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} m={0} mih={350}>
      <Text>Ubicación</Text>
      <MapContainer
        height="100%"
        anchor={[Number(lat), Number(long)]}
        defaultCenter={[Number(lat), Number(long)]}
      />
    </GridCol>
  );
};
