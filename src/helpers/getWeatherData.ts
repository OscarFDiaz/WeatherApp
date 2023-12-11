import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { getEnvironments } from './getEnviroments';

interface Props {
  lat: string;
  long: string;
}

export const getWeatherData = async ({ lat, long }: Props) => {
  const url = 'https://rickandmortyapi.com/api';
  // const { VITE_APIKEY } = getEnvironments();
  // const url = `http://api.weatherapi.com/v1/forecast.json?key=${VITE_APIKEY}&q=${lat},${long}&days=5&aqi=no&alerts=no`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    notifications.show({
      title: 'Error al hacer la solicitud a la API',
      message: `Error: ${error}`,
    });
    throw error;
  }
};
