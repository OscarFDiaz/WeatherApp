import { Footer, HeaderUser } from '../../components';
import { weatherData } from '../../data/weatherData';
import { WeatherInterface } from '../../interfaces/WeatherInterface';
import { UserDetailsLayout } from '../../layout';

export const User = () => {
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

  const weatherInfo: WeatherInterface = weatherData;

  return (
    <>
      <HeaderUser />
      <UserDetailsLayout weatherInfo={weatherInfo} />
      <Footer />
    </>
  );
};
