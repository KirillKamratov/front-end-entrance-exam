import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	base: './',
	root: '.',
	build: {
		sourcemap: true,
	},
	server: {
		open: true,
		port: 5173,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'js'),
		},
	},
	css: {
		devSourcemap: true,
	},
});
