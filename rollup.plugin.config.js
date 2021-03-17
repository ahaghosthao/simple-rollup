import { comment } from './comment-helper-es'

export default {
  input: './src/plugin/main.js',
  output: [{
    file: './dist/index-plugin-cjs.js',
    format: 'cjs',
    banner: comment('welcome to rollup', 'this is a rollup test project'),
    footer: comment('powered by ghosthao', 'copyright 2021'),
    exports:'auto'
  }, {
    file: './dist/index-plugin-es.js',
    format: 'es',
    banner: comment('welcome to rollup', 'this is a rollup test project'),
    footer: comment('powered by ghosthao', 'copyright 2021'),
    exports:'auto'
  }]
}

