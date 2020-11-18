/*
 * @Descripttion:数值的扩展
 * @Date: 2020-11-04 09:08:47
 * @LastEditTime: 2020-11-04 11:19:40
 */
// 二进制（前缀0b/0B）和八进制(0o/0O)表示法
// 从es5开始，在严格模式之中，八进制就不再允许使用前缀0表示，es6进一步明确，要是用前缀0o表示
// 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法
console.log(Number('0b111'));

// Number.isFinite():用来检查一个数值是否为有限的（finite）,只对数值有效，非数值一律返回false
// es5
// (function (global) {
//   var global_isFinite = global.isFinite;

//   Object.defineProperty(Number, 'isFinite', {
//     value: function isFinite(value) {
//       return typeof value === 'number' && global_isFinite(value);
//     },
//     configurable: true,
//     enumerable: false,
//     writable: true
//   });
// })(this);
// Number.isNaN():检查一个值是否为NaN，只对数值有效，非数值一律返回false
// es5
(function (global) {
  var global_isNaN = global_isNaN;
  Object.defineProperty(Number, 'isNaN', {
    value: function isNaN(value) {
      return typeof value === 'number' && global_isNaN(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(this);

// Number.parseInt(),Number.parseFloat()

// Number.isInteger():用来判断一个值是否为整数。注意：在js内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值
// es5
// (function (global) {
//   var floor = Math.floor,
//     isFinite = global.isFinite;

//   Object.defineProperty(Number, 'isInteger', {
//     value: function isInteger(value) {
//       return (
//         typeof value === 'number' &&
//         isFinite(value) &&
//         value > -9007199254740992 &&
//         value < 9007199254740992 &&
//         floor(value) === value
//       );
//     },
//     configurable: true,
//     enumerable: false,
//     writable: true
//   });
// })(this);

// Number.EPSILON:极小常量
// 目的：为浮点数计算，设置一个误差范围,如果误差小于Number.EPSILON,我们就可以认为得到了正确结果
// console.log(Number.EPSILON.toFixed(20));
// console.log((0.1 + 0.2 - 0.3).toFixed(2) < Number.EPSILON);

// 安全整数和Number.isSaftInteger()
// js能准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
// console.log(Math.pow(2, 53));

// Number.MAX_SAFE_INTEGER和Number.MIN_SAFT_INTEGER常量：上述范围的上下限
// console.log(Object.is(Number.MAX_SAFE_INTEGER, Math.pow(2, 53) + 1));
// console.log(Object.is(Number.MAX_SAFE_INTEGER, -Number.MIN_SAFE_INTEGER));

// Number.isSaftInteger():判断一个整数是否落在这个范围之内
// console.log(Number.isSafeInteger('a'));
// console.log(Number.isSafeInteger(null));
// console.log(Number.isSafeInteger(NaN));
// console.log(Number.isSafeInteger(Infinity));
// console.log(Number.isSafeInteger(-Infinity));
// console.log(Number.isSafeInteger(3));
// console.log(Number.isSafeInteger(1.2));

// Math对象的扩展
// 1、Math.trunc():用于去除一个数的小数部分，返回整数部分
// console.log(Math.trunc(12.2323));
// 注意：非数值会先隐式转换为数值，控制和无法截取整数的值，返回NaN
// console.log(Math.trunc('aaa'));//NaN

// 2、Math.sign():判断一个数到底是正数、负数、还是0
// 参数为正数：+1
// 参数为负数：-1
// 参数为0：0
// 参数为-0：-0
// 其他值：返回NaN

// 3、Math.cbrt():计算一个数的立方根
// console.log(Math.cbrt(-1));
// console.log(Math.cbrt(2));

// 4、Math.clz32():js的整数使用32位二进制形式表示，此方法返回一个数的32位无符号整数形式有多少个前导0
console.log(Math.clz32(0)); //32 0
console.log(Math.clz32(1)); // 31 0b1
console.log(Math.clz32(1000)); // 22 0b1111101000
Math.clz32(0b01000000000000000000000000000000); // 1
Math.clz32(0b00100000000000000000000000000000); // 2

// 5、Math.imul():返回两个数以32位带符号整数形式想乘的结果，返回的也是一个32位的带符号整数
console.log(Math.imul(2, 4));

// 6、Math.fround():返回一个数的单精度浮点数形式
// console.log(Math.fround(12));
// console.log(Math.fround(12.121));
// console.log(Math.fround(12.1));
// console.log(Math.fround(NaN));

// 7、Math.hypot():返回所有参数的平方和的平方根
// console.log(Math.hypot(3, 4));

// 8、对数方法：
// Math.expm1(x):返回ex - 1，即Math.exp(x) - 1
// Math.log1p(x):返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
// Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN。
// Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。

// 9、三角函数方法
// Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
// Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
// Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
// Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
// Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
// Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

// 9、指数运算符：es7新增
console.log(2 ** 3);
let a = 2;
a **= 2;
console.log(a);

// 总结：
// 1、Number.isFinite():检查一个数值是否为有限的
// 2、Number.isNaN():检查一个数值是否为NaN
// 3、Number.parseInt()  Number.parseFloat()
// 4、Number.isInteger():判断是否为整数
// 5、Number.EPSILOW:极小常量
// 6、Number.isSafeInteger():判断是都落在这个安全范围内
// 7、Number.MAX_SAFE_INTEGER Number.MIN_SAFE_INTEGER
// 8、Math.trunc():去除小数部分，保留整数部分
// 9、Math.sign():判断一个数到底是正数、负数，还是0
// 10、Math.cbrt():计算一个数的立方根
// 11、Math.imul():想乘
// 12、Math.fround():返回一个数的单精度浮点数形式
// 13、Math.hypot():返回所有参数的平方和的平方根
// 14、对数方法
// 15、三角函数方法
// 16、指数运算符 **
