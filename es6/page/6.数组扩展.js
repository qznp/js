/*
 * @Descripttion:数组扩展
 * @Date: 2020-11-04 11:20:14
 * @LastEditTime: 2020-11-05 17:23:29
 */
// Array.from()：将两类对象转为真正的数组
let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
// es5
// var arr1 = [].slice.call(arrayLike);
// console.log(arr1);
// es5解析
// Array.prototype.mySlice = function (begin, end) {
//   var start = begin || 0;
//   var len = this;
//   start = start >= 0 ? start : Math.max(1, len + start);
//   end = typeof end == 'number' ? Math.min(end, len) : len;
//   if (end < 0) {
//     end = end + len;
//   }
//   var result = new Array();
//   for (let index = 0; index < end.length; index++) {
//     result.push(this[index]);
//   }
//   return result;
// };
// function list() {
//   return Array.prototype.mySlice.call(arguments);
// }
// console.log(list(2, 6, 1));

// es6
let arr2 = Array.from(arrayLike);
console.log(arr2);
// 如果存在第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
// let arr3 = Array.from(arrayLike, (x) => x + x);
// console.log(arr3);
// let arr4 = Array.from(arrayLike).map((x) => x + x);
// console.log(arr4);

// 扩展运算符（...）也可将某些数据结构转为数组
// [...[1,1,1]]

// Array.of():用于将一组值，转换为数组
// console.log(Array.of(3, 11, 8));

// 数组实例的copyWithin():在当前数组内部，将制定位置的成员复制到其它位置（会覆盖原有成员），然后返回当前数组
// 第一个参数：从该位置开始替换数据
// 第二个参数：从该位置开始读取数据，默认为0，如果为负值，表示倒数
// 第三个参数：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
// Array.prototype.copyWithin(target, (start = 0), (end = this.length));
// console.log([1, 2, 3, 4, 5].copyWithin(0, 2));
// console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
// console.log({ length: 5, 3: 1 }.length);
// console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 1));
// // 解释
// var objectLikeArray = { length: 5, 3: 1 };
// (function (objectLikeArray, targetIn, startIndex) {
//   var target = targetIn;
//   for (var i = startIndex; i < objectLikeArray.length; i++) {
//     if (objectLikeArray.hasOwnProperty(i)) {
//       objectLikeArray[target] = objectLikeArray[i];
//     } else {
//       delete objectLikeArray[target];
//     }
//     target++;
//   }
//   console.log(objectLikeArray);
//   return objectLikeArray;
// })({ length: 5, 3: 1 }, 0, 2);

// 数组实例的find():找到第一个返回值为true的成员返回该成员，没有符合条件的成员则返回undefined
// console.log([1, 2, 3, 4, 5].find((n) => n < 0));
let find1 = [1, 2, 3, 4, 5].find((value, index, arr) => {
  // console.log(value);
  // console.log(index);
  // console.log(arr);
});
// findIndex():找到第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

// 以上两个方法都可以发现NaN,可弥补数组IndexOf()方法的不足
// console.log([NaN].indexOf(NaN));
// console.log([0, NaN].findIndex((y) => Object.is(NaN, y)));

// 数组实例fill():使用给定值，填充一个数组
// console.log(['1', '2', '3'].fill(78));
// 第一个参数：填充值
// 第二个参数：起始位置
// 第三个参数：结束位置
// console.log(['1', '2', '3'].fill(78, 1, 2));

// 数组实例entries(),keys()和values(),与对象中的实例方法类似
//可与for of配套使用
// 也可以调用遍历器对象的next方法
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']

// 数组实例includes(),与字符串中的实例方法类似，返回的是true和false
console.log([1, 2, 3].includes(2));
// 第二个参数表示搜索的起始位置，
// 负数的话，就是倒数的位置，如果大于数组长度时，会从0开始
console.log([1, 2, 3].includes(1, -4));
// indexOf两个缺点：1、不够语义化，需要去比较是否不等于-1；2、内部是严格相等运算符进行判断，会导致NaN的误判

// 数组的空位:空位不是undefined，一个位置的值等于undefined，依然是有值的，空位是没有任何值
// es5对空位的处理
// 1、forEach().filter(),every()和some()会跳过空位
// 2、map()会跳过空位，但会保留这个值
// 3、join(),toString(),会将空位视为undefined，而undefined和null会被处理成空字符串

// es6明确将空位转为undefined
console.log(Array.from([, , 1]));
console.log([...['a', , 'b']]);
// copyWithin()会量空位一起拷贝
// console.log([, 'a', 'b', ,].copyWithin(2, 0));
// fill():会将空位视为正常的数组位置
// console.log(new Array(3).fill('a'));
// for of循环遍历空位
// entries()\keys()\values()\find()\findIndex():处理成undefined
// console.log([...[, 'a']]);
// console.log([...[, 'a'].entries()]);
console.log(['1', 'a'].find((x) => true));

// 总结：
// 1、Array.from():将两类对象转为真正的数组，扩展运算符也有类似功能
// 2、Array.of():用于将一组值转为数组，类似功能String.split(',')
// 3、copyWithin(target,start=0,end=this.length):在当前数组内部，将制定位置的成员复制到其它位置（会覆盖原有成员），然后返回当前数组
// 4、find()：找到值返回true,找不到返回undefined
// 5、findIndex()：找到值返回字符的位置，找不到返回-1
// 6、fill():使用一个给定值，填充数组
// 7、entries()、values()、keys()
// 8、includes()
// 9、数组的空位
