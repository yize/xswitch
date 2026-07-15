const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      background: './src/background.ts',
      xswitch: './src/pages/xswitch/xswitch.tsx',
      options: './src/pages/options/options.tsx'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].min.js',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json')
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ] : []),
      new HtmlWebpackPlugin({
        template: './XSwitch.html',
        filename: 'XSwitch.html',
        chunks: ['xswitch'],
        inject: false
      }),
      new HtmlWebpackPlugin({
        template: './options.html',
        filename: 'options.html',
        chunks: ['options'],
        inject: false
      }),
      // 自定义插件：复制静态文件
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('CopyStaticFiles', (compilation) => {

            // 复制 lib 目录
            if (fs.existsSync('./lib')) {
              const copyDir = (src, dest) => {
                if (!fs.existsSync(dest)) {
                  fs.mkdirSync(dest, { recursive: true });
                }
                const items = fs.readdirSync(src);
                items.forEach(item => {
                  const srcPath = path.join(src, item);
                  const destPath = path.join(dest, item);
                  if (fs.statSync(srcPath).isDirectory()) {
                    copyDir(srcPath, destPath);
                  } else {
                    fs.copyFileSync(srcPath, destPath);
                  }
                });
              };
              copyDir('./lib', './build/lib');
            }
            // 复制 images 目录
            if (fs.existsSync('./images')) {
              const copyDir = (src, dest) => {
                if (!fs.existsSync(dest)) {
                  fs.mkdirSync(dest, { recursive: true });
                }
                const items = fs.readdirSync(src);
                items.forEach(item => {
                  const srcPath = path.join(src, item);
                  const destPath = path.join(dest, item);
                  if (fs.statSync(srcPath).isDirectory()) {
                    copyDir(srcPath, destPath);
                  } else {
                    fs.copyFileSync(srcPath, destPath);
                  }
                });
              };
              copyDir('./images', './build/images');
            }
            // 复制 manifest.json
            if (fs.existsSync('./manifest.json')) {
              fs.copyFileSync('./manifest.json', './build/manifest.json');
            }
            // 复制 index.html
            if (fs.existsSync('./index.html')) {
              fs.copyFileSync('./index.html', './build/index.html');
            }
          });
        }
      }
    ],
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendors',
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // },
    devServer: {
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 9000,
      hot: false,
      liveReload: false
    }
  };
}; 