这个目录用来实例node的包的用法

一个js文件为一个模块

在一个包中的所有子模块中，需要有一个入口模块，入口模块的导出对象被作为包的导出对象。

在使用包的其他模块时，需要加载报的入口模块,使用该命令` require('/home/user/lib/cat/main') `，为了简化入口模块的名称，可以把入口模块的名称修改成index.js，这样命令就可以使用

```
var cat = require('/home/user/lib/cat');
var cat = require('/home/user/lib/cat/index');
```

另外也可以通过package.json来配置入口模块

{
    "name": "cat",
    "main": "./main.js"
}

访问方式不变。