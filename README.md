# webpack学习
## 2018-05-04
学习链接[http://www.css88.com/doc/webpack/concepts/](http://www.css88.com/doc/webpack/concepts/)

### [资源整合](http://www.css88.com/doc/webpack/guides/asset-management/)

整合css
-

+ 需要在 module 配置中 安装并添加 style-loader 和 css-loader

        npm install --save-dev style-loader css-loader

+ 修改webpack.config.js

        const path = require('path');
        
        module.exports = {
          entry: './src/index.js',
          output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
          },
          module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
            ]
          }
        };
        
+ 详细参考[http://www.css88.com/doc/webpack/guides/asset-management/](http://www.css88.com/doc/webpack/guides/asset-management/)
