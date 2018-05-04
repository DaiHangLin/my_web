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


hello webpack  
-
+ 目录结构

![](https://images2018.cnblogs.com/blog/596306/201805/596306-20180504152025557-2087211975.png)

- 添加src/index.js
- 添加dist/index.html
- 添加webpack.config.js
- ./node_modules/.bin/webpack 打包

在浏览器中打开index.html查看是否显示hello webpack，显示即为成功


