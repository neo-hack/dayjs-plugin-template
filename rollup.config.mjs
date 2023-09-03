import path from 'node:path'

import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import { externals } from 'rollup-plugin-node-externals'

export default defineConfig([
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.ts',
    plugins: [
      externals({
        devDeps: false,
      }),
      resolve(),
      esbuild({
        target: 'node16',
      }), // so Rollup can convert TypeScript to JavaScript
      alias({
        customResolver: resolve({ extensions: ['.tsx', '.ts'] }),
        entries: Object.entries({
          '@/*': ['./src/*'],
        }).map(([alias, value]) => ({
          find: new RegExp(`${alias.replace('/*', '')}`),
          replacement: path.resolve(process.cwd(), `${value[0].replace('/*', '')}`),
        })),
      }),
      commonjs(),
      filesize(),
    ],
    output: [
      { format: 'cjs', dir: 'dist', entryFileNames: '[name].cjs' },
      { format: 'es', dir: 'dist', entryFileNames: '[name].mjs' },
    ],
  },
])
