/**
 * Created by lai on 2016/3/31.
 */
/**
 * Created by lai on 3/30/16.
 */

var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var debug = '';

module.exports = {
    entry: {
        header: './src/js/components/header/entry.js',
        hello: './src/js/components/hello/entry.js',
        react: ['react'],
        jquery: ['jquery']
    },
    output: {
        path: path.resolve(debug ? '__build' : './assets/'),
        publicPath: debug ? '/__build/' : '',
        filename: debug ? '[name].js' : 'js/[chunkhash:8].[name].min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
                        optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
                ]
            },
            {
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style!css!less'},
        ]
    },
    plugins: [
        //在打包多个入口文件时会提取出公用的部分
        //提取公共模块jquery，react
        new webpack.optimize.CommonsChunkPlugin({
            name: ['jquery', 'react'],
            minChunks: Infinity
        }),
        //压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //动态生成html
        new HtmlWebpackPlugin({
            filename: 'hello.html',
            template: './src/hello.html',
            inject: true,
            chunks: ['react', 'jquery', 'header'],
            chunksSortMode: function (a, b) {
                var index = {'header': 1, 'react': 3, 'jquery': 2},
                    aI = index[a.origins[0].name],
                    bI = index[b.origins[0].name];
                return aI&&bI? bI -aI : -1;
            }
        }),
        //单独使用style标签加载css
        new ExtractTextPlugin("comm.[contenthash:9].css")
    ]
};