import { GridCol, Text } from '@mantine/core';
import { MapContainer } from '..';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const MapForecast = () => {
  const { id } = useParams();
  const { users } = useSelector((state: RootState) => state.user);
  const userID = users.findIndex((user) => user.id == Number(id));

  const lat = Number(users[userID].lat);
  const long = Number(users[userID].long);

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
