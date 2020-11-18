/*
 * @Descripttion:promise对象：是一个构造函数
 * @Date: 2020-11-16 17:26:37
 * @LastEditTime: 2020-11-17 14:14:58
 */
// 基本用法
// 三种状态：pending(进行中)、resolved(已完成)、rejected(已失败)
// var promise = new Promise((resolve,reject) => {
//   //  ...some code
//   if () {///**异步操作成功 */
//     resolve(value);
//   } else {
//     reject(error);
//   }
// })

// promise实例生成以后，可以用then方法分别指定resolved状态和reject状态的回调函数
// promise.then(
//   function (value) {
//     // success
//   },
//   function (error) {
//     // failure
//   }
// );

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }
// timeout(100).then((value) => {
//   console.log(value);
// });

// promise新建后立即执行
// let promise = new Promise((resolve, reject) => {
//   console.log('Promise');
//   resolve();
// });
// promise.then(() => {
//   console.log('Resolved');
// });
// console.log('hi');

// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000);
// });
// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000);
// });
// p2.then((result) => console.log(result)).catch((error) => console.log(error));

// var p = promise.all([p1,p2,p3]):用于将多个promise实例，包装成一个新的promise实例,等待p1,p2,p3的状态全部结束，才会返回p的状态

// var p = promise.race([p1,p2,p3]):将多个Promise实例，包装成一个新的promise实例，当p1,p2,p3中有一个实例率先改变状态，p的状态就跟着改变

// Promise.resolve():将现有对象转为promise对象
// Promise.resolve('foo');
// 等价于
// new Promise(resolve => resolve('foo'));

// Promise.reject():返回一个新的promise实例，该实例的状态为rejected。它的参数用法与promise.resolve方法完全一致。
// var p = Promise.reject('出错了');
// 等同于
// var p = new Promise((resolve, reject) => reject('出错了'));
// p.then(null, (s) => {
//   console.log(s);
// });

/** 两个有用的附加方法 **/
// (1)、done():Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
// asyncFunc().then(f1).catch(r1).then(f2).done();
// Promise.prototype.done = function (onFulfilled, onRejected) {
//   this.then(onFulfilled, onRejected).catch(function (reason) {
//     setTimeout(() => {
//       throw reason;
//     }, 0);
//   });
// };
// （2）、finally():用于指定不管promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
// server
//   .listen(0)
//   .then(function () {
//     // run test
//   })
//   .finally(server.stop);
// Promise.prototype.finally = function (callback) {
//   let p = this.constructor;
//   return this.then(
//     (value) => p.resolve(callback()).then(() => value),
//     (reason) =>
//       p.resolve(callback()).then(() => {
//         throw reason;
//       })
//   );
// };

// Promise.try()
// 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用Promise来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误
// Promise.resolve.then(f)
// 让同步函数同步执行，异步函数异步执行
// 第一种：async函数
// const f = () => console.log('now');
// (async () => f())();
// console.log('next');
// 第二种：使用new Promise()
// const f = () => console.log('now');
// (() => new Promise((resolve) => resolve(f())))();
// console.log('next');
// 第三种：Promise.try()
// const f = ()=> console.log('now');
// Promise.try(f);
// console.log('next');
