import { cloudflare } from '@cloudflare/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cloudflare(),
		tsconfigPaths(),
		{
			name: 'logging',
			handleHotUpdate({ file, server }) {
				console.log(`🔥 hot update: ${file}`);
			},
		},
	],
	server: {
		port: 7000,
		proxy: {
			'/api': 'http://1227.0.0.1:8787',
		},
	},
});
