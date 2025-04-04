import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  base: "/",
  server: {
    //Specify the development server port
    port: 3001,
  },
  resolve: {
    alias: {
      components: '/src/components',
      containers: '/src/layouts',
      myRedux: '/src/myRedux',
      helpers: '/src/helpers',
      assets: '/src/assets',
    },
  },
});
