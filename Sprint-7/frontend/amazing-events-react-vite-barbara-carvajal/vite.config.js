import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Establecer la ruta de entrada a la ruta de inicio de sesión
    // para que se abra directamente en http://localhost:5173/login
    // en lugar de http://localhost:5173
    open: '/login',
  },
});
