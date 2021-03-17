export default {
    input:'./src/main.js',
    output:[{
        file:'./dist/index-cjs.js',
        format:'cjs',
        banner: '// welcome to rollup',
        footer: '// powered by ghosthao'
    }]
}