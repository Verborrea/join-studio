import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [enhancedImages(),sveltekit()]
// });
export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces de red
    port: 5173       // Mantén el puerto configurado
  }
});