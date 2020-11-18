/*
 * @Descripttion:对象的扩展:直接写入变量和函数，作为对象的属性和方法
 * @Date: 2020-10-26 12:03:06
 * @LastEditTime: 2020-11-09 11:26:17
 */
// var obj = {
//   foo
// };
// // 等同于以下
// var obj = {
//   foo: foo
// };

// var obj = {
//   test: function () {}
// };
// // 等同于以下
// var obj = {
//   test() {}
// };

// let propKey = 'foo';
// var obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };
// console.log(obj);

// 报错：属性名表达式与简洁表示法不能同时使用
// var foo = 'bar';
// var bar = 'abc';
// var baz = { [foo] };

// 方法的name属性
// 函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
// var person = {
//   sayName() {
//     console.log(this.name);
//   },
//   get firstName() {
//     return 'Nicholas';
//   }
// };
// console.log(person.sayName.name); // "sayName"
// console.log(person.firstName.name); // undefined

// Object.is();用老比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致,比（===）更严格
// 正负0 false,NaN与NaN true
// console.log(Object.is('', 0));
// console.log(Object.is({}, {}));
// console.log(Object.is(+0, -0));
// console.log(+0 === -0);
// console.log(Object.is(NaN, NaN));
//es5中代码
// Object.defineProperty(Object, 'is', {
//   value: function (x, y) {
//     if (x === y) {
//       // 针对+0不等于-0的情况
//       return x !== 0 || 1 / x === 1 / y;
//     }
//     // 针对NaN的情况
//     return x !== x && y !== y;
//   },
//   configurable: true,
//   enumerable: false,
//   writable: true
// });
// console.log(Object.is(0, -0));

// Object.assign(a,b1,b2,b3...):对象的合并,第一个参数是目标对象， 后面的参数都是源对象。如果有同名属性会进行属性覆盖
// 如果目标对象不是对象会先进行类型转换，转换成对象，undefined和null无法转换成对象，所以他们作为参数的话，就会报错
// 如果源对象是undefined和null，不会合并进去，对合并任务无影响
// 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性
// Object.assign()方法实行的是浅拷贝
// var target = { a: 1 };
// var source1 = { b: 2 };
// var source2 = { c: 3 };
// Object.assign(target, source1, source2, undefined, null);
// console.log(target);

console.log(Object(true));
console.log(Object(10));
console.log(Object('abc'));

let obj = { foo: 123 };
var a = Object.getOwnPropertyDescriptor(obj, 'foo'); //获取该属性的描述对象
console.log(a);
/**
{
  configurable: true
  enumerable: true  //可枚举性，如果该属性为false，就表示某些操作会忽略当前属性
  value: 123
  writable: true
}
会忽略enumerable为false属性的操作：
1、for in 循环：只遍历对象自身的和继承的可枚举的属性
2、Object.keys()：返回对象自身的所有可枚举的属性的键名
3、JSON.stringify()：只串行对象自身的可枚举的属性
4、Object.assign()：ES6新增操作，只拷贝对象自身的可枚举的属性
 */

//  属性的遍历
// 1、for in 循环遍历对象自身的和继承的可枚举属性（不含symbol属性）
// 2、Object.keys(obj) 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含symbol属性）
/***
 * var obj = { foo: "bar", baz: 42 };
 * Object.keys(obj); // ['foo', 'baz']
 * ES7提案，引入了跟Object.keys配套的Object.values和Object.entries
 * Object.values()：返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值,会过滤属性名为Symbol值的属性。
 * var obj = { foo: 'bar', baz:42 };
 * Object.values(obj); // ['bar', 42]
 * Object.values('foo'); // ['f', 'o', '0']
 * Object.entries(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组,会过滤属性名为Symbol值的属性。
 * var obj = { foo: 'bar', baz:42 };
 * Object.entries(obj); // [['foo', 'bar'],['baz', 42]]
 * let aaa = { one: 1, two: 2 };
 * for (const [k, v] of Object.entries(aaa)) {
 *  console.log(k);
 * }
 */
// 3、Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性（不含symbol属性，但是包括不可枚举属性）
// 4、Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有属性
// 5、Reflect.ownKeys(obj) 返回一个数组，包含对象自身的所有属性，不管是属性名是symbol或字符串，也不管是否可枚举

// 以上属性遍历的次序规则
// 1、首先遍历所有属性名为数值的属性，按照数字排序
// 2、其次遍历所有属性名为字符串的属性，按照生成时间排序
// 3、最后遍历所有属性名为symbol值的属性，按照生成时间排序
// let rank = Reflect.ownKeys({ [Symbol()]: 0, b: 0, 10: 0 });
// console.log(rank);//["10", "b", Symbol()]

// __proto__属性：用来兑取和设置当前对象的prototype对象（IE11）
// var objs = {
//   method: function () {}
// };
// objs.__proto__ = someOtherObj;
// function someOtherObj() {}
// console.log(objs);

// Object.setPrototypeOf(object,prototype):用来设置一个对象的prototype对象
// Object.getPrototypeOf():用来读取一个对象的prototype对象

// 对象的扩展运算符：Rest运算符（解构赋值）/扩展运算符（...）引入对象
// 1、解构赋值
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);
console.log(y);
console.log(z);
// 2、扩展运算符：（...）用于取出 参数对象的所有可遍历属性，拷贝到当前对象之中。等同于Object.assign()
let objZ = {
  a: 2,
  b: 3
};
let n = { ...objZ };
console.log(n);
// let ab = { ...a, ...b }; 等同于 let ab = Object.assign({}, a, b);
// 注意：如果扩展运算符的参数是null或undefined，这个两个值会被忽略，不会报错。

// Object.getOwnPropertyDescriptors()方法:主要为了解决Object.assign()无法正确拷贝get属性和set属性的问题
const source = {
  set foo(value) {
    console.log(value);
  }
};
const target1 = {};
Object.assign(target1, source);
let bbb = Object.getOwnPropertyDescriptor(target1, 'foo');
console.log(bbb);
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
let ccc = Object.getOwnPropertyDescriptor(target2, 'foo');
console.log(ccc);

// 总结:
// 1、Object.is():等同于“===”，正负0 false,NaN与NaN true
// 2、Object.assign():合并对象，浅拷贝
// 3、Object.keys()：遍历key值
// 4、Object.values()：遍历value值
// 5、Object.entries()：遍历key,value值
// 6、可直接写入变量和函数，书写简洁
// 7、属性的遍历：for in、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Reflect.ownKeys()
// 8、__proto__属性:setPrototypeOf()、getPrototypeOf()
// 9、Object.getOwnPropertyDescriptors():主要为了解决Object.assign()无法正确拷贝get属性和set属性的问题
// 10、对象扩展运算符（...）:浅拷贝，解构赋值
