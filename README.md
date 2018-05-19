# webpack学习
## 2018-05-04
学习链接[http://www.css88.com/doc/webpack/concepts/](http://www.css88.com/doc/webpack/concepts/)

基本概念
-
   - 入口
   - 出口
   - loader
   - plugins

安装
-
- npm install --save-dev webpack 最新版本
- npm install --save-dev webpack@<version>  特地版本
- 安装完成后 ./node_modules/.bin/webpack进行打包

不同的branch测试demo
-

+ [hello webpack README.md](https://github.com/DaiHangLin/my_web/blob/hello-webpack/README.md)

+ [npm run build README.md](https://github.com/DaiHangLin/my_web/blob/npm/README.md)

+ [asset manage README.md](https://github.com/DaiHangLin/my_web/blob/asset-manage/README.md)

+ [npm start README.md](https://github.com/DaiHangLin/my_web/blob/npm-script/README.md)

+ [区别开发和生产环境 README.md](https://github.com/DaiHangLin/my_web/blob/dev-prod/README.md)

## 2018-05-17

+ 使用webpack打包源码时，难以追踪源代码的原始位置，不过javascript提供了[source map](http://www.css88.com/doc/webpack/configuration/devtool/)功能，将编译后的代码映射到源代码
+ webpack-dev-server提供了一个简单的web服务器，并且能够实时重新加载。
    + `npm install --save-dev webpack-dev-server`
    +  webpack.config.js中添加
     
              const path = require('path');
              const HtmlWebpackPlugin = require('html-webpack-plugin');
            
              module.exports = {
                entry: {
                  app: './src/index.js',
                  print: './src/print.js'
                },
                devtool: 'inline-source-map',
            +   devServer: {
            +     contentBase: './dist'
            +   },
                plugins: [
                  new CleanWebpackPlugin(['dist']),
                  new HtmlWebpackPlugin({
                    title: 'Development'
                  })
                ],
                output: {
                  filename: '[name].bundle.js',
                  path: path.resolve(__dirname, 'dist')
                }
              };
              
    
    + 修改 package.json,在scripts下添加
    ` "start": "webpack-dev-server --open"` 

+ 最后通过 `npm start`启动web服务器


## 2018-05-19

### [配置打包生成开发环境和生产环境-参考官方文档](https://webpack.js.org/guides/production/)

+ 开发环境 development
    + 需要source map能够在出错时准确定位到代码位置
+ 生产环境 production
    + 需要更轻量的代码结构

### 首先我们需要借助 webpack-merge的工具

+ 下载安装webpack-merge

        npm install --save-dev webpack-merge
        
+ 调整project的配置
+ 修改npm script
+ 官方也是建议在prod上开启源码映射
    + 但是需要注意的是Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance
    + 翻译后不要使用inline-*** 或者 eval-***的源码映射选项，因为会增大budle体积,降低performance

+ DefinePlugin 可以帮助我们设置node 的***环节变量***
        
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        })
        


