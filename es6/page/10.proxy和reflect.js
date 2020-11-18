/*
 * @Descripttion:Proxy和Reflect
 * @Date: 2020-11-11 14:23:05
 * @LastEditTime: 2020-11-16 15:25:05
 */
// Proxy:用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。
// Proxy可以理解成，在目标对象之前架设一层“拦截”，外层对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”
var obj = new Proxy(
  {},
  {
    get: function (target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      console.log(`setting ${key}!`);
      return Reflect.set(target, key, value, receiver);
    }
  }
);
// obj.count = 1;
// ++obj.count;
// target:表示所要拦截的目标对象
// handler：表示一个对象，用来定制拦截行为
// var proxy = new Proxy(target, handler);

// Proxy支持的拦截操作预览
// 1、get(target,propKey,receiver);拦截对象属性的读取
// 2、set(target,propKey,value,receiver);//拦截对象属性的设置，proxy.foo = v,返回一个布尔值
// 3、has(target,propKey);//拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值
// 4、deleteProperty(target,propKey);//拦截delete proxy[propKey]的操作，返回一个布尔值
// 5、ownKeys(target);//拦截Object.getOwnPropertyNames(proxy)\Object.getOwnPropertySymbols(proxy)\Object.keys(proxy),返回一个数组。该方法返回对象所有自身的属性，而object.keys()仅返回对象可遍历的属性
// （6）getOwnPropertyDescriptor(target, propKey)

// 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

// （7）defineProperty(target, propKey, propDesc)

// 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

// （8）preventExtensions(target)

// 拦截Object.preventExtensions(proxy)，返回一个布尔值。

// （9）getPrototypeOf(target)

// 拦截Object.getPrototypeOf(proxy)，返回一个对象。

// （10）isExtensible(target)

// 拦截Object.isExtensible(proxy)，返回一个布尔值。

// （11）setPrototypeOf(target, proto)

// 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。

// 如果目标对象是函数，那么还有两种额外操作可以拦截。

// （12）apply(target, object, args)

// 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

// （13）construct(target, args)

// 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

// Proxy.revocable():返回一个可取消的proxy实例

// Reflect对象设计的目的：
// 1、将object对象的一些明显属于语言内部的方法（比如object.defineProperty）,放到Reflect对象上。现阶段，某些方法同时在object和reflect对象上部署，未来的新方法将只部署在reflect对象上
// 2、修改某些object方法的返回结果，让其变得更合理。比如object.defineProperty（obj,name,desc）在无法定义属性时，会抛出一个错误，而reflect.defineProperty(obj,name,desc)则会返回false
// 3、让object操作都变成函数行为。某些object操作是命令式，比如name in obj和delete obj[name],而Reflect.has(obj,name)和Reflect.deleteProperty(obj,name)让他们变成了函数行为。
// 'assign' in Object;//老写法
// Reflect.has(Object,'assign');//新写法
// 4、Reflect对象的方法与Proxy对象的方法意义对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便的调用对应的Reflect方法，完成默认行为，作为修改行为的基础，也就是说，不管Proxy怎么修改默认行为，你中可以在Reflect上获取行为

// （1）Reflect.get(target, name, receiver)

// 查找并返回target对象的name属性，如果没有该属性，则返回undefined。

// 如果name属性部署了读取函数，则读取函数的this绑定receiver。

// var obj = {
//   get foo() { return this.bar(); },
//   bar: function() { ... }
// };

// // 下面语句会让 this.bar()
// // 变成调用 wrapper.bar()
// Reflect.get(obj, "foo", wrapper);
// （2）Reflect.set(target, name, value, receiver)

// 设置target对象的name属性等于value。如果name属性设置了赋值函数，则赋值函数的this绑定receiver。

// （3）Reflect.has(obj, name)

// 等同于name in obj。

// （4）Reflect.deleteProperty(obj, name)

// 等同于delete obj[name]。

// （5）Reflect.construct(target, args)

// 等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

// （6）Reflect.getPrototypeOf(obj)

// 读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。

// （7）Reflect.setPrototypeOf(obj, newProto)

// 设置对象的__proto__属性，对应Object.setPrototypeOf(obj, newProto)。

// （8）Reflect.apply(fun,thisArg,args)

// 等同于Function.prototype.apply.call(fun,thisArg,args)。一般来说，如果要绑定一个函数的this对象，可以这样写fn.apply(obj, args)，但是如果函数定义了自己的apply方法，就只能写成Function.prototype.apply.call(fn, obj, args)，采用Reflect对象可以简化这种操作。
