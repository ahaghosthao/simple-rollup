这是从零开始学习 rollup 的过程记录
# 快速开始

创建一个空文件夹，并命名为 __simple-rollup__。
```bash
mkdir simple-rollup && cd simple-rollup
```
初始化文件夹
```bash
npm init -y
```
### 安装
1. 全局安装 (为了方便使用 rollup 命令),当然你也可以不安装,你也可以是用局部安装的命令方式去使用 rollup
```bash
npm i -g rollup
```
2. 局部安装
```bash
npm i -D rollup
```

### 运行
新建一个需要打包的文件
```bash
touch src/main.js
```
在 main.js 中写入如下逻辑
```javascript
const a = 1
export default a
```
使用 rollup 命令打包
```bash
## 全局安装使用如下命令
rollup ./src/main.js -f es
## 局部安装使用如下命令
./node_modules/.bin/rollup ./src/main.js -f es 
```
有关 rollup 的详细参数 请看[官网 api(中文文档)](https://www.rollupjs.com/guide/command-line-reference)

这时候就会输出如下结果
```bash
➜  rollup git:(main) ✗ rollup src/main.js -f es

src/main.js → stdout...
const a = 1;

const aa =  function (){
    console.log(a);
};

export { aa };
```
至此 恭喜你 已经成功运行了 rollup 了！
如果你想知道具体的详细知识，你可以去看[官网](https://rollupjs.org/guide/en/) 或者是[中文网站](https://www.rollupjs.com)。 如果你更喜欢手把手教程，我给你推荐下面这一篇[10分钟快速入门rollup](https://www.imooc.com/article/262083)。


### 常用的插件
#### rollup-plugin-node-resolve
> 这个插件是将我们的代码中引用的第三方库合并到我们的打包文件中，避免用户再去使用安装！

#### rollup-plugin-commonjs
> 这个插件是让我们可以使用 CommomJs 模块

#### rollup-plugin-babel
> 使用 babel 将 es6+的语法转化为低版本的语法

#### rollup-plugin-json
> 可以支持引入 json 文件

#### rollup-plugin-uglify
> 压缩代码体积 不支持 es模块 所以可以用下面的代替

#### rollup-plugin-terser
> 压缩代码

#### rollup-plugin-postcss
> 处理css需要用到的插件是 rollup-plugin-postcss。它支持css文件的加载、css加前缀、css压缩、对scss/less的支持等等。
#### rollup-plugin-serve
> 用于启动一个服务器

#### rollup-plugin-livereload
>用于文件变化时，实时刷新页面
```javascript
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
  ...
  plugins:[
    serve({
      contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
      port: 8020   //端口号，默认10001
    }),    
    livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
  ]
}

```
### 进阶和精通
[10分钟快速精通rollup.js——前置学习之基础知识篇](https://www.imooc.com/article/264075)

[10分钟快速精通rollup.js——前置学习之rollup.js插件篇](https://www.imooc.com/article/264076)

[10分钟快速精通rollup.js——Vue.js源码打包原理深度分析](https://www.imooc.com/article/264074)