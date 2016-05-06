/**
 * Created by lai on 2016/5/5.
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';

//动态生成html
let HtmlPlugins = [
    new HtmlWebpackPlugin({
        filename: 'hello.html',
        template: './src/hello.html',
        inject: true,
        chunks: ['react', 'jquery', 'hello'],
        chunksSortMode: function (a, b) {
            var index = {'hello': 1, 'react': 3, 'jquery': 2},
                aI = index[a.origins[0].name],
                bI = index[b.origins[0].name];
            return aI&&bI? bI -aI : -1;
        }
    })
];
export default HtmlPlugins
