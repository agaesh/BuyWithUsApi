import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows access from any IP address on your local network
    port: 5173,      // Optional: explicitly specify the port (default is 5173)
  },
})
