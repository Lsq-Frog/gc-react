/**
 * Created by lai on 2016/3/31.
 */
/**
 * Created by lai on 3/30/16.
 */

import path from 'path';
import Plugins from  './config/plugins.babel'

let debug = '';

export default {
    entry: {
        header: './src/js/components/header/entry.js',
        hello: './src/js/components/hello/entry.js',
        react: ['react'],
        jquery: ['jquery']
    },
    output: {
        path: path.resolve(debug ? '__build' : './assets/'),
        publicPath: debug ? '/__build/' : '',
        filename: debug ? 'js/[name].js' : 'js/[chunkhash:8].[name].min.js'
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
    plugins: Plugins
}