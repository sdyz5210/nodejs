var i = 0;

function count(){
	return ++i
}
<!-- exports 对象是当前模块的导出对象，用于导出模块公有方法和属性 -->
exports.count = count