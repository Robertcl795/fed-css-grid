import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import autoPreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';

const production = !process.env.ROLLUP_WATCH;
const aliases = alias({
	resolve: ['.svelte', '.js'],
	entries: [
	  { find: 'api', replacement: 'src/api' },
	  { find: 'components', replacement: 'src/components' },
	  { find: 'layout', replacement: 'src/layout' },
	  { find: 'routes', replacement: 'src/routes' },
	  { find: 'utils', replacement: 'src/utils' },
	]
  });

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		aliases,
		svelte({
			compilerOptions: { dev: !production },
     		preprocess: autoPreprocess()
		}),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		!production && serve(),
		!production && livereload('public'),
		production && terser(),
	],
	watch: {
		clearScreen: true
	}
};