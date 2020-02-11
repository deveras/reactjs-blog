import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import sassPostcss from 'rollup-plugin-sass-postcss';

// POST CSS
import stylelint from 'stylelint';
import postcssReporter from 'postcss-reporter';

const dist = 'dist';
const bundle = 'bundle';
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'source/js/index.js',
  watch: {
    clearScreen: false
  },
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
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        'react-router-dom': 'ReactRouterDOM'
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
    sassPostcss({
      include: [/\.sass/u, /\.scss/u],
      sourcemap: true,
      plugins: [
        stylelint({
          rules: {
            'color-no-invalid-hex': true,
            'font-family-no-duplicate-names': true,
            'function-calc-no-invalid': true,
            'string-no-newline': true,
            'unit-no-unknown': true,
            'property-no-unknown': true,
            'declaration-block-no-duplicate-properties': true,
            'declaration-block-no-shorthand-property-overrides': true,
            'block-no-empty': true,
            'selector-pseudo-class-no-unknown': true,
            'selector-pseudo-element-no-unknown': true,
            'selector-type-no-unknown': true,
            'media-feature-name-no-unknown': true,
            'at-rule-no-unknown': true,
            'comment-no-empty': true,
            'no-descending-specificity': true,
            'no-duplicate-at-import-rules': true,
            'no-duplicate-selectors': true,
            'no-empty-source': true,
            'no-extra-semicolons': true,
            'no-invalid-double-slash-comments': true,

            'string-quotes': 'single'
          }
        }),
        postcssReporter()
      ],
      output: `${dist}/styles/style.css`,
      throwOnError: !process.env.ROLLUP_WATCH
    }),
    serve({
      open: true,
      contentBase: `${dist}`,
      host: 'localhost',
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0,
        Vary: '*'
      },
      historyApiFallback: true
    }),
    livereload({
      watch: 'dist',
      verbose: true
    })
  ],

  external: ['react', 'react-dom', 'prop-types', 'react-router-dom']
};
