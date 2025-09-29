import { cloudflare } from '@cloudflare/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { log } from 'workers-loki-logger';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cloudflare(),
		{
			name: 'logging',
			handleHotUpdate({ file, server }) {
				log('info', `🔥 hot update: ${file}`);
			},
		},
	],
	server: {
		proxy: {
			'/api': 'http://127.0.0.1:8787',
		},
	},
});
