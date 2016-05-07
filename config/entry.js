/**
 * Created by lai on 2016/5/7.
 */
import glob from 'glob'

let GetEntry = (function() {
    let entry = {}; //读取开发目录,并进行路径裁剪
    glob.sync('./src/**/entry.js') .forEach(function(name) {
        let start = name.indexOf('src/') + 4, end = name.length - 3;
        let n = name.slice(start, end);
        n = n.slice(0, n.lastIndexOf('/')); //保存各个组件的入口
        entry[n] = name;
    });
    entry['jquery'] = ['jquery'];
    entry['react'] = ['react'];
    return entry;
})();
export default GetEntry