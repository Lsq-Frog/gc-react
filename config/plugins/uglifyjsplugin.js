/**
 * Created by lai on 2016/5/5.
 */
import webpack from 'webpack';

//压缩
var UglifyJsPlugin = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
})];

export default UglifyJsPlugin