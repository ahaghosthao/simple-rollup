import {comment} from './comment-helper-es';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import vue from 'rollup-plugin-vue'
import babel from "rollup-plugin-babel";
import {terser} from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";


export default {
    input: './src/main.js',
    output: [
        {
            file: './dist/index-plugin-cjs.js',
            format: 'cjs',
            banner: comment('welcome to rollup', 'this is a rollup test project'),
            footer: comment('powered by ghosthao', 'copyright 2021'),
            exports: 'auto',
            globals: {
                vue:'vue'
            }
        }, {
            file: './dist/index-plugin-es.js',
            format: 'es',
            banner: comment('welcome to rollup', 'this is a rollup test project'),
            footer: comment('powered by ghosthao', 'copyright 2021'),
            exports: 'auto',
            globals: {
                vue:'vue'
            }
        }, {
            file: './dist/index-plugin-umd.js',
            format: 'umd',
            banner: comment('welcome to rollup', 'this is a rollup test project'),
            footer: comment('powered by ghosthao', 'copyright 2021'),
            exports: 'auto',
            name: 'test',
            globals: {
                vue:'vue'
            }
        }],
    plugins: [
        resolve(),
        vue(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        postcss({
                plugins: [
                    autoprefixer(),
                    cssnano()
                ],
                extract: 'css/index.css'
            }
        ),
        // terser(),
        serve({
            contentBase: '',
            port: 3333
        }),
        livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
    ],
    external: ['vue']
}

