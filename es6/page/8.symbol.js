/*
 * @Descripttion:symbol,原始数据类型，表示独一无二的值，第七种数据类型
 * @Date: 2020-11-09 16:11:43
 * @LastEditTime: 2020-11-10 09:07:55
 */
// es6引入symbol原因：从根本上防止属性名的冲突
// let s = Symbol();
// console.log(typeof s);
// var s1 = Symbol('foo');
// console.log(s1);
// console.log(s1.toString());
// Symbol可以显示转换为字符串类型，布尔类型
// console.log(String(s1));
// console.log(Boolean(s1));

// 作为属性名的Symbol，不能使用点运算符
// var mySymbol = Symbol();
// var a = {
//   [mySymbol]: 'hi'
// };
// console.log(a[mySymbol]);

// 函数中使用方式
// let s = Symbol();
// let obj = {
//   [s]: (params) => params
// };
// console.log(obj[s](123));

// 定义一组常量
// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// };

// 消除魔术字符串
// const shapeType = {
//   triangle: Symbol()
// };
// function getArea(shape, options) {
//   var area = 0;
//   switch (shape) {
//     case shapeType.triangle: //魔术字符串
//       area = 0.5 * options.width * options.height;
//       break;
//   }
//   return area;
// }

// 属性名的遍历
// Object.getOwnPropertySymbols()可以获取指定对象的所有Symbol属性名，返回一个数组，成员是当前对象的所有用作属性名的Symbol值
// Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()/Object.getOwnPropertyNames()/JSON.stringify()返回
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');
// obj[a] = 'hi';
// obj[b] = 'ha';
// console.log(Object.getOwnPropertySymbols(obj));

// Reflect.ownKeys():返回所有类型的键名，包括常规键名和Symbol键名
// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// };
// console.log(Reflect.ownKeys(obj));

// Symbol.for():重新使用同一个Symbol值
// console.log(Symbol.for('foo') === Symbol.for('foo'));

// Symbol.keyFor():返回一个已登记的Symbol类型值的key
// var s2 = Symbol.for('foo');
// console.log(Symbol.keyFor(s2));

// 内置的Symbol值
// Symbol.hasInstance属性：指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例是，会调用这个方法。
// Symbol.isConcatSpreadable属性：等于一个布尔值，表示该对象使用Array.prototype.concat()
// Symbol.species属性：指向一个方法。该对象作为构造函数创造实例时，会调用这个方法
// Symbol.match:指向一个函数。当执行str.match(myObject)时，如果改属性存在，会调用它，返回该方法的返回值
// Symbol.replace：指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
// Symbol.search：指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
// Symbol.split：指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
// Symbol.iterator：对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
// Symbol.toPrimitive：指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。Number/String/Default
// Symbol.toStringTag：指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
// JSON[Symbol.toStringTag]：'JSON'
