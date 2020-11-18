/*
 * @Descripttion:正则扩展
 * @Date: 2020-11-03 16:39:43
 * @LastEditTime: 2020-11-04 09:07:51
 */
//es5正则
var regex = new RegExp('xyz', 'i');
var regex = new RegExp(/xyz/i);
// es6中当第一个参数是正则表达式时，可添加第二个参数
console.log(new RegExp(/abc/gi, 'i').flags);

// 字符串对象可使用正则表达式的方法：match()、replace()、search()、split(),被定义在RegExp对象上

// 添加u修饰符，含义为Unicode模式

// 添加y修饰符，粘连修饰符，全局匹配
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

// console.log(r1.exec(s)); // ["aaa"]
// console.log(r2.exec(s)); // ["aaa"]

// console.log(r1.exec(s)); // ["aa"]
// console.log(r2.exec(s)); // null

// sticky:是否设置了y修饰符
// var r = /aaa/y;
// console.log(r.sticky);

// flags:返回正则表达式的修饰符
// console.log(/aaa/gi.flags);

// 添加s修饰符：dotAll模式，正则中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符除外
// 行终止符：换行符\n  回车符\r 行分隔符  段分隔符
// console.log(/foo.bar/s.test('foo\nbar'));
// console.log(/foo.bar/s.dotAll); //是否处在dotAll模式

// 后行断言：x只能在y后面才匹配。必须写成/(?=y)x/。
// 后行否定断言：x只有不在y后面才匹配，必须写成/(?!y)y/
// 先行断言：x只能在y前面才匹配。必须写成/x(?=y)/。
// 先行否定断言：x只有不在y前面才匹配，必须写成/x(?!y)/

// Unicode属性类：\p{...} \P{...}:不满足\p{...}条件的字符
