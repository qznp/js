/*
 * @Descripttion: es6 http://caibaojian.com/es6/let.html
 * @Date: 2020-10-26 11:45:53
 * @LastEditTime: 2020-10-30 16:40:13
 */
// 一、变量
// 1、var 全局变量
// 2、let 局部变量,
/* let特性：
（1）不存在变量提升；
（2）暂时性死区
（3）不允许重复声明
（4）块级作用域
（5）允许在块级作用域中声明函数，只能在块级作用域内可调用。在es5中的严格模式下，在块级作用域中声明函数会报错；非严格模式下不会报错是浏览器为了兼容以前的旧代码。
    注意：es6的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。
var tmp = 123;
if (true) {
  tmp = 'abc';
  let tmp;
  console.log(tmp);
}

if (true) {
  function test() {
    console.log(1);
  }
  test();
}
function f() {
  console.log('I am outside!');
}
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {
      console.log('I am inside!');
    }
  }
  f();
})();
*/
// 3、const 常量,声明了就不能变
// let a = 12;
// const a;
// a = 12;
// var a = 13;
// console.log(a);
// Object.freeze({});// 将对象冻结

// 二、变量的解构赋值
// 1、解构左右两边结构相同
// let [a, b, c] = [1, 2, 3];
// console.log(a);

// 2、赋默认值
// let [a, b = 'b'] = ['able'];
// console.log(a);
// console.log(b);
function f() {
  console.log('aaa');
}
// es6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数字成员不严格等于undefined，默认值是不会生效的。
// var [x = 1] = [undefined];
// console.log(x);
// let [x = f()] = [1];
// console.log(x);

// 3、对象解构
// let { foo, bar } = {
//   foo: 'cc',
//   bar: '成'
// };
// console.log(foo);
// console.log(bar);

// 坑点：先声明再解构，需要在外层加一个括号
// let foo;
// ({ foo } = {
//   foo: 'cc'
// });
// console.log(foo);

// 4、字符串解构（区分权限时可使用）
// const [a, b, c, d, e, f] = 'adcdefg';
// console.log(a);
// 对length属性进行解构
// let { length: len } = 'hello';
// console.log(len);

// 5、数值和布尔值的解构赋值
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// let { toString: s } = 123;
// console.log(s === Number.prototype.toString);
// let { toString: s } = true;
// console.log(s === Boolean.prototype.toString);

// 6、函数参数的解构赋值
// function add([x, y]) {
//   return x + y;
// }
// let test = add([1, 2]);
// console.log(test);

// function move({ x, y } = { x: 0, y: 0 }) {
// return [x, y];
// }
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, undefined]
// move({ x: 3, y: undefined }); // [3, undefined]
// move({}); // [undefined, undefined]
// move(); // [0, 0]

// 坑点：先声明再解构，需要在外层加一个括号
// let foo;
// ({ foo } = {
//   foo: 'cc'
// });
// console.log(foo);

// 不能使用圆括号的情况
// （1）变量声明语句中，不能带有圆括号
// var [(a)] = [1];
// （2）函数参数中，模式不能带有圆括号
// function f([(z)]) {
//   return z;
// }
// （3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
// ({ (p: a) }) = { p: 42 };

// 可以使用圆括号的情况：赋值语句的非模式部分，可以使用圆括号
// [(b)] = [3];
// ({ p: (d) } = {});
// [(parseInt.prop)] = [3];

// 解构用途
// （1）交换变量的值
// [x, y] = [y, x];
// （2）从函数返回多个值
// function arr() {
//   return [1, 2, 3];
// }
// var [a, b, c] = arr();
// （3）函数参数的定义
// 参数是一组有次序的值
// function f([x, y, z]) {}
// f([1, 2, 3]);
// 参数是一组无次序的值
// function f({ x, y, z }) {}
// f({ z: 1, y: 2, x: 3 });
// （4）提取json数据
// let jsonData = {
//   id: 12,
//   status: 'ok',
//   data: [1, 2]
// };
// let { id, status, data } = jsonData;
// console.log(id, status, data);
// （5）函数参数的默认值
// jQuery.ajax = function (
//   url,
//   {
//     async = true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomin = false,
//     global = true
//   }
// ) {};
// （6）遍历Map解构
// var map = new Map();
// map.set('a', 'hi');
// map.set('b', 'hello');
// for (const [key, value] of map) {
//   console.log(key + 'is' + value);
// }
// （7）输入模块的指定方法
// const {fun1,fun2} = require('mao');
