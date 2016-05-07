/**
 * Created by lai on 2016/3/31.
 */

import path from 'path'//node 原生path模块
import Plugins from  './config/plugins.babel' //plugins 配置
import GetEntry from './config/entry'//entry

let debug = false;

export default {
    entry: GetEntry,
    output: {
        path: path.resolve(debug ? './build/' : './dist/'),
        publicPath: debug ? '' : '',
        filename: debug ? 'js/[name].js' : 'js/[chunkhash:8].[name].min.js'
    },
    resolve: {
        alias: {},//定义别名
        extensions: ['', '.js', '.jsx'],//配置项,设置忽略js后缀
        root: './src'
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
                        optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]'
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