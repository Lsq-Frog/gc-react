/**
 * Created by lai on 2016/5/5.
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';
//单独使用style标签加载css
let TextPlugin = [
    new ExtractTextPlugin('[name].css', {
        allChunks: true
    })
];

export default TextPlugin