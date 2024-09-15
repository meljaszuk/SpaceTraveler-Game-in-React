import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SpaceTraveler-Game-in-React/', // Ustaw bazowy URL zgodnie z nazwą repozytorium
});
