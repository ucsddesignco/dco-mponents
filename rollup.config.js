import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sourcemaps from 'rollup-plugin-sourcemaps'
import sucrase from '@rollup/plugin-sucrase'

const packageJson = require('./package.json')

export default [
	{
		input: 'src/index.ts',
		external: ['react-dom'],
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			sourcemaps(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json', exclude: ['**/__tests__', '**/*.test.ts', '**/*.test.tsx', '**/__stories__', '**/stories/*.tsx', '**/*.stories.ts', '**/*.stories.tsx'] }),
			postcss(),
			sucrase({
				exclude: ['node_modules/**'],
				transforms: ['typescript', 'jsx'],
			}),
			terser(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts.default()],
		external: [/\.css$/, /\.scss$/],
	},
]
