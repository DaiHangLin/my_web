# webpack学习
## 2018-05-04
学习链接[https://webpack.js.org/guides/output-management/#preparation)

### [资源整合](https://webpack.js.org/guides/output-management/#preparation)

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
        
+ 详细参考[https://webpack.js.org/guides/output-management/#preparation](https://webpack.js.org/guides/output-management/#preparation)
