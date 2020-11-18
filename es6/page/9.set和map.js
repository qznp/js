/*
 * @Descripttion:set/map数据结构
 * @Date: 2020-11-10 09:08:31
 * @LastEditTime: 2020-11-11 14:18:58
 */
// set数据结构：类似于数组，但是成员的值都是唯一的，没有重复的值，也是一种去重的方法
// set本身就是一个构造函数，用来生成set数据结构
// var s = new Set();
// [1, 2, 3, 4, 5, 5, 5, 5].map((x) => s.add(x));
// console.log(s);
// var set = new Set([1, 2, 3, 4, 4]);
// console.log([...set]);
// console.log(set.size);
// set内部，两个NaN是相等的，两个空对象是不相等的

// set实例的属性和方法
// 属性：
// Set.prototype.constructor:构造函数，默认就是set函数
// Set.prototype.size:返回Set实例的成员总数
// 方法：
// add(value):添加某个值，返回Set结构本身
// delete(value):删除某个值，返回一个布尔值，表示删除是否成功
// has(value):返回一个布尔值，表示该值是否为Set的成员
// clear():清除所有成员，没有返回值

// Array.from()可以将Set结构转为数组
// var items = new Set([1, 2, 3, 4, 5]);
// var array = Array.from(items);
// console.log(array);

// 遍历操作
// keys()/values()/entries()/forEach()
// 注意：set的遍历顺序就是插入顺序
// 遍历的应用：扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构
// let sets = new Set(['red', 'green', 'blue']);
// let arr = [...sets];
// console.log(arr);
// 去重
// let arr = [1, 2, 3, 4, 1, 1];
// let unique = [...new Set(arr)];
// console.log(unique);
// 数组的map和filter方法也可用于Set
// let setss = new Set([1, 2, 3, 4, 5]);
// let map = new Set([...setss].map((x) => x * 2));
// console.log(map);
// let filter = new Set([...setss].filter((x) => x % 2 == 0));
// console.log(filter);

// WeakSet:与Set类似，也是不重复的值的集合。也有两个区别：
// 1、成员只能是对象，而不能是其它类型的值
// 2、WeakSet的成员只能是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用。是不可遍历的
// add()/has()/delete()

// Map数据结构，类似于对象，也是键值对的集合
// var map = new Map();
// var o = { p: 'hi' };
// map.set(o, 'content');
// console.log(map.get(o));
// console.log(map.has(o));
// console.log(map.delete(o));
// console.log(map.has(o));

// var map = new Map([
//   ['name', '张三'],
//   ['title', 'Author']
// ]);
// console.log(map);
// console.log(map.size);

// var map = new Map();
// map.set(['a'], 555);
// console.log(map.get(['a']));
// var k = ['a'];
// map.set(k, 111);
// console.log(map.get(k));
// 属性和方法
// 1、size属性
// 2、set(key,value)
// 3、get(key)
// 4、has(key)
// 5、delete(key)
// 6、clear()
// 遍历方法:keys()/values()/entries()/forEach()
// 结合使用扩展运算符（...）
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
// console.log([...map.keys()]);
// 结合数组的map方法，filter方法
// forEach方法还可以接受第二个参数，用来绑定this
// var reporter = {
//   report: function (key, value) {
//     console.log('key:%s,value:%s', key, value);
//   }
// };
// map.forEach(function (value, key, map) {
//   this.report(key, value);
// }, reporter);

// Map转为数组：（...）
let map1 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log([...map1]);
// 数组转为Map
console.log(
  new Map([
    [true, 7],
    [{ foo: 3 }, ['abc']]
  ])
);
// Map转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (const [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
let map2 = new Map().set('yes', true).set('no', false);
let map3 = strMapToObj(map2);
console.log(map3);
// 对象转为Map
function objToStrMap(obj) {
  let strMap = new Map();
  for (const k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
console.log(objToStrMap({ yes: true, no: false }));
// Map转为JSON
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}
let map4 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(map4));
// JSON转为Map
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}
console.log(jsonToStrMap('{"yes":true,"no":false}'));

// WeakMap:与map结构基本类似，唯一的区别是它只接受对象作为键名（null除外）
