- gc-react/             # webapp根目录
  - src/                # 开发目录
    - hello/            # hello模块
      + img/            # webapp图片资源目录
      + js/             # webapp js&jsx资源目录
      + less/           # 样式
      hello.html        # hello模板
    + lib/              # 第三方纯js库
    ...                 # 根据项目需要任意添加的代码目录
  - dist/               # 编译输出目录，即发布目录
    + js/               # 编译输出的js目录
    + img/              # 编译输出的图片目录
    + css/              # 编译输出的css目录
    a.html              # 编译输出的入口a
    b.html              # 编译处理后的入口b
  - bulid/              # 编译输出目录，即开发目录
    + js/               # 编译输出的js目录
    + img/              # 编译输出的图片目录
    + css/              # 编译输出的css目录
    a.html              # 编译输出的入口a
    b.html              # 编译处理后的入口b
  + mock/               # 假数据目录,模拟数据
  .gitignore            # git配置
  webpack.config.js     # webpack配置文件
  package.json          # 项目配置
  README.md             # 项目说明