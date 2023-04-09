import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteSvgPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), viteSvgPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    port: 3000,
  },
});
