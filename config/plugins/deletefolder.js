/**
 * Created by lai on 2016/5/6.
 */
import fs from 'fs'
import CleanPlugin from 'clean-webpack-plugin';

let DeleteFolderRecursive = [
    new CleanPlugin(['dist', 'build'], {
        root: 'C:/user/gc-react/',
        verbose: true,
        dry: false
    })
]
//let DeleteFolderRecursive = [
//    function() {
//        this.plugin("done", function() {
//            deleteFolder('./assets/');
//        });
//    }
//]
//let deleteFolder = function(path) {
//    var files = [];
//    if( fs.existsSync(path) ) {
//        files = fs.readdirSync(path);
//        files.forEach(function(file,index){
//            var curPath = path + "/" + file;
//            if(fs.statSync(curPath).isDirectory()) { // recurse
//                deleteFolder(curPath);
//            } else { // delete file
//                fs.unlinkSync(curPath);
//            }
//        });
//        fs.rmdirSync(path);
//    }
//};
export default DeleteFolderRecursive