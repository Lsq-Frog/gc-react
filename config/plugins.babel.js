/**
 * Created by lai on 2016/5/5.
 */

import ChunkPlugins from './plugins/commonschunkplugin';
import UglifyJsPlugin from './plugins/uglifyjsplugin';
import TextPlugin from './plugins/extracttextplugin';
import HtmlPlugins from './plugins/htmlwebpackplugin';
import DeleteFolderRecursive from './plugins/deletefolder'

let merge = function() {
    return Array.prototype.concat.apply([], arguments)
};

let Plugins = merge(DeleteFolderRecursive,ChunkPlugins, UglifyJsPlugin, TextPlugin, HtmlPlugins);

export default Plugins;