/**
 * Created by lai on 2016/5/5.
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';

//动态生成html
let HtmlPlugins = [
    new HtmlWebpackPlugin({
        filename: 'hello.html',
        template: './src/hello/hello.html',
        inject: true,
        chunks: ['hello', 'react', 'jquery'],
        chunksSortMode: function (a, b) {
            var index = {'hello': 1, 'jquery': 2, 'react': 3},
                aI = index[a.origins[0].name],
                bI = index[b.origins[0].name];
            return aI&&bI? bI -aI : -1;
        }
    }),
    //new HtmlWebpackPlugin({
    //    filename: 'header.html',
    //    template: './src/header/header.html',
    //    inject: true,
    //    chunks: ['header', 'react', 'jquery'],
    //    chunksSortMode: function (a, b) {
    //        var index = {'header': 1, 'jquery': 2, 'react': 3},
    //            aI = index[a.origins[0].name],
    //            bI = index[b.origins[0].name];
    //        return aI&&bI? bI -aI : -1;
    //    }
    //})
    new HtmlWebpackPlugin({
        filename: 'weekly.html',
        template: './src/weekly/weekly.html',
        inject: true,
        chunks: ['weekly'],
        chunksSortMode: function (a, b) {
            var index = {'weekly': 1},
                aI = index[a.origins[0].name],
                bI = index[b.origins[0].name];
            return aI&&bI? bI -aI : -1;
        }
    })
];
export default HtmlPlugins
