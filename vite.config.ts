import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WeatherApp/',
  server: {
    proxy: {
      '/api': 'http://localhost:5173/',
    },
  },
  plugins: [react()],
});
