<!-- 
	require 函数用于在当前模块中加载和使用别的模块
	下面初始化两次count.js不会有影响
 -->
var counter1 = require('./utils/count')
var counter2 = require('./utils/count.js')

console.log(counter1.count())
console.log(counter2.count())
console.log(counter2.count())