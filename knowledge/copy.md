# copy 浅拷贝和深拷贝

## 假设 B 复制了 A，当修改 A 时，看 B 是否会发生变化，如果 B 也跟着变了，说明这是浅拷贝，如果 B 没变，那就是深拷贝

### 基本数据类型：number，string，boolean，null，undefined，symbol

** 基本类型不受浅拷贝影响，但是也不算是深拷贝 **

```
let aa = 1;
let bb = aa;
bb = 2;
console.log(aa,bb);//1 2
```

### 引用数据类型：object 数组以及函数等

** 引用数据类型的数据会指向一个引用地址，当其它的数值拷贝引用数据类型的值时，其实只是将它的指针也指向了引用数据类型的引用地址，两者共享一块儿地址，这就是浅拷贝 **

```
let a = [0,1,2,3,4];
b = a;
console.log(a === b); //true
a[0] = 1;
console.log(a); // [1,1,2,3,4]
console.log(b); // [1,1,2,3,4]
```

### 为了让引用数据类型能够向基本类型一样能够拥有自己单独的引用地址，可进行深拷贝

** 方法一：递归 **

```
function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断obj子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
let deep = [1,2,3,4];
let deep_clone = deepClone(deep);
deep[0] = 2;
console.log(deep); // [2,2,3,4]
console.log(deep_clone); // [1,2,3,4]
```

** 方法二：利用 JSON 的 parse 和 stringify 方法 **

```
function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

缺点：（1）undefined、任意的函数、正则表达式类型以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）；
（2）它会抛弃对象的 constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成 Object；
（3）如果对象中存在循环引用的情况无法正确处理。

** 方法三：借用 jq 的 extend 方法 **

```
// $.extend([deep], target, object1, [objectN])
// deep：表示是否深拷贝，true为深拷贝，false为浅拷贝
// target：Object类型 目标对象，其他对象的成员属性将被附加到该对象上
// object1  objectN可选。object类型第一个以及第N个被合并的对象
let jq = [0, 1, [2, 3], 4], jq_clone = $.extend(true, [], jq);
jq[0] = 1;
jq_clone[2][0] = 1;
console.log(jq); // [1, 1, [2, 3], 4]
console.log(jq_clone); // [0, 1, [1, 3], 4]
```
