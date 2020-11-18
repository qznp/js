/*
 * @Descripttion:函数扩展
 * @Date: 2020-11-05 17:24:05
 * @LastEditTime: 2020-11-09 15:33:54
 */
// 函数设置默认值
function log(x, y = 'world') {
  console.log(x, y);
}
log('hi');
log('hi', '123');
log('hi', '');
// 与解构默认值结合使用
function test(url, { method = 'get', headers = {}, body = '' }) {
  console.log(method);
}
// test('http://www.baidu.com', {});
// 函数的length属性:没有指定默认值的参数个数
console.log(function (a) {}.length);
console.log(function (a = 4) {}.length);

// 作用域

// rest参数（...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。reset参数搭配的变量是一个数组，该变量将多余的参数放入数组中
// function test(...arr) {}

// 扩展运算符:主要用于函数调用
// function add(x, y) {
//   console.log(x + y);
// }
// var number = [1, 24];
// 扩展运算符替代数组的apply方法
// add(...number);
// add.apply(null, number);

// ES5的写法
console.log(Math.max.apply(null, [14, 3, 77]));
// ES6的写法
console.log(Math.max(...[14, 3, 77]));
// 等同于
console.log(Math.max(14, 3, 77));

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// ES5的写法
// console.log(Array.prototype.push.apply(arr1, arr2));
// // ES6的写法
// console.log(arr1.push(...arr2));

// function f(v, w, x, y, z) {
//   console.log(v);
//   console.log(w);
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
// var args = [0, 1];
// f(-1, ...args, 2, ...[3]);

// 扩展运算符的应用
// 1、合并数组
var arr1 = [1, 2],
  arr2 = [3, 4],
  arr3 = [5, 6],
  more = [30, 40];
// console.log(arr1.concat(more));
// console.log([1, 2, ...more]);
// console.log(arr1.concat(arr2, arr3));
// console.log([...arr1, ...arr2, ...arr3]);
// 2、与解构赋值结合
// const [first, ...reset] = [1, 2, 3, 4, 5];
const [first, ...reset] = [];
// console.log(first);
// console.log(reset);
// 注意：如果将扩展运算符用于数组赋值，只能放在参数的最后一名，否则会报错
// 3、函数的返回值
// 4、字符串：将字符串转为数组
// console.log([...'hello']);
// 5、实现了Iterator接口的对象：任何Iterator接口的对象，都可以用扩展运算符转为真正的数组
// var nodeList = document.querySelectorAll('div');
// var arr = [...nodeList]
// nodeList对象不是数组，只是一个类似数组的对象
// 6、Map和Set结构，Generator函数
// let map = new Map([
//   [1, 'one'],
//   [2, 'two']
// ]);
// let arr4 = [...map.keys()];
// console.log(arr4);
// var go = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// console.log([...go()]);

// 严格模式
// es6函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就补鞥呢显式设定为严格模式，否则报错
// es6中使用严格模式两种方法
// 1、全局性的严格模式
// 2、把函数包在一个无参数的立即执行函数里面

// name属性
// function foo() {}
// console.log(foo.name);
// es5中会返回一个空字符串，es6会返回函数名
// var fun1 = function () {};
// console.log(fun1.name);
// console.log(fun1.name);

// Function构造函数返回的函数实例，name属性的值为“anonymous”
// arguments、caller变量失效

// 箭头函数
// 大括号被解释为代码块，如果箭头函数直接返回一个对象，必须在对象外面加上括号
// var getFun1 = (id) => ({ id: id, name: 'fun1' });

// 箭头函数与变量解构结合使用
const full = ({ first, last }) => first + '&&' + last;
console.log(full({ first: 12, last: 13 }));
// 等同于
// function full(person) {
//   return person.first + '&&' +person.last;
// }

// rest参数
// var fun2 = (params1, ...params2) => [params1, params2];
// console.log(fun2(1, [2, 3, 4]));

// 注意：
// 1、函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// 2、不可以当作函数构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
// 3、不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以用Rest参数代替
// 4、不可以使用yield命令，因此箭头函数不能用作Generator函数
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}
var f = foo.call({ id: 1 });
var t1 = f.call({ id: 2 })()();
var t2 = f().call({ id: 3 })();
var t3 = f()().call({ id: 4 });
// 另外：除了this，以下三个变量在箭头函数之中也是不存在的，指向外向函数的对应变量：arguments、super、new.target
// 箭头函数没有自己的this,所以也不能用call()、apply()、bind()这些方法改变this的指向
(function () {
  return [(() => this.x).bind({ x: 'inner' })];
}.call({ x: 'outer' }));

// 绑定this,函数绑定运算符是（::）,左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
// foo::bar(...arguments)
// 等同于
// bar.apply(foo,arguments)
// 也可采用链式写法
// let { find, html } = jake;
// document.querySelectorAll('div')::find("p")::html('hhh');

// 尾调用：指某个函数的最后一步是调用另一个函数,不一定出现在函数尾部，只要是最后一步操作即可
// function f(x) {
//   return g(x);
// }

// 尾递归
// function fun11(n) {
//   if (n === 1) return 1;
//   return n * fun11(n - 1);
// }
// console.log(fun11(5));
// function fun222(n, total) {
//   if (n === 1) return total;
//   return fun222(n - 1, n * total);
// }
// console.log(fun222(5, 2));

// 函数式编程有一个概念叫做柯里化：将多参数的函数转换成单参数的形式
// function fun333(n, total = 1) {
//   if (n === 1) return total;
//   return fun333(n - 1, n * total);
// }
