import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const dist = 'dist';
const bundle = 'bundle';
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'source/js/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'ANDREchangeME',
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],

  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser(),
    copy({
      targets: [
        { src: 'source/index.html', dest: 'dist/' },
        { src: 'source/styles/imgs/**/*', dest: 'dist/styles/imgs' },
        { src: 'source/styles/fonts/**/*', dest: 'dist/styles/fonts' }
      ]
    }),
    serve({
      open: true,
      contentBase: `${dist}`,
      host: 'localhost',
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }),
    livereload()
  ],

  external: ['react']
};
