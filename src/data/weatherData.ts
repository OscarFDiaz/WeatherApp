export const weatherData = {
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