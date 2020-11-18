/*
 * @Descripttion:加强了对Unicode的支持，并扩展了字符串对象
 * @Date: 2020-11-02 12:01:19
 * @LastEditTime: 2020-11-03 16:38:57
 */
// 字符Unicode表示法：允许采用\uxxxx形式表示一个字符，种种“xxxx”表示字符的码点
// 1、codePointAt():字符串转Unicode编码。码点的十进制值，转十六进制（toString），测试一个字符由两个字节还是由4个字节组成的最简单方法
// js内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节存储存的字符（Unicode码点大于0xFFFF的字符），js会认为它们是两个字符
// var s = '𠮷';
// console.log(s.length);
// console.log(s.charAt(0));
// console.log(s.charAt(1));
// console.log(s.charCodeAt(0)); // 字符串转Unicode编码
// console.log(s.charCodeAt(1)); // 字符串转Unicode编码

// 2、String.fromCodePoint():es5用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）
// let s = String.fromCharCode(0x20bb7);// 不能识别大于oxFFFF的码点
// let s = String.fromCodePoint(0x20bb7); // 弥补了String.fromCharCode方法的不足
// console.log(s);

// 3、字符串遍历：for of，除遍历字符串，最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点
// var text = String.fromCodePoint(0x20bb7);
// for (let i of text) {
//   console.log(i);
// }

// 4、at()
// es5对字符串对象提供charAt,返回字符串给定位置的字符，该方法不能识别码点大于0xFFFF的字符
console.log('abc'.charAt(0)); // "a"
console.log('𠮷'.charAt(0)); // "\uD842"
// 需要通过垫片库实现 https://github.com/es-shims/String.prototype.at
// import './../string.prototype.at';
// console.log('abc'.at(0)); // "a"
// console.log('𠮷'.at(0));

// 5、normalize()：将字符不同表示方法统一为统一为同样的形式，被称为Unicode正规化

// 6、indexOf()
// includes():返回布尔值，表示是否找到了参数字符串
// startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
// endsWith():返回布尔值，表示参数字符串是否在源字符串的尾部
// var s = 'hello world';
// console.log(s.startsWith('hello'));
// console.log(s.endsWith('d'));
// console.log(s.includes('d'));
// 第二个参数表示开始搜索的位置
// console.log(s.startsWith('hello', 0));
// console.log(s.endsWith('d', 11));
// console.log(s.includes('d', 0));

// 7、repeat():返回一个新的字符串，表示将原字符串重复n次，
// console.log('x'.repeat(3));
// 参数如果是小数，会向下取整
// console.log('x'.repeat(2.9));
// 如果是负数或者Infinity会报错
// console.log('x'.repeat(-2.9));
// console.log('x'.repeat(Infinity));
// NaN等同于0
// console.log('x'.repeat(NaN));
// 参数是字符串，则会先转换成数字
// console.log('x'.repeat('x'));
// console.log('x'.repeat('3'));

// padStart():es7推出的字符串补全长度的功能，如果某个字符串不够指定长度，会在头部补全
// padEnd():es7推出的字符串补全长度的功能，如果某个字符串不够指定长度，会在尾部补全
// 参数一：用来指定字符串的最小长度
// 参数二：用来补全的字符串，省略第二个参数则会用空格补全长度
console.log('x'.padStart(6, 'ab'));
console.log('x'.padEnd(6, 'ab'));
console.log('12'.padStart(10, 'YYYY-MM-DD'));
console.log('09-12'.padStart(10, 'YYYY-MM-DD'));

// 模板字符串：``
// 模板字符串中嵌入变量，需要将变量名写在${}之中.
// 大括号内可以放入任意的js表达式，可以进行运算，以及引用对象属性，如果大括号内是一个字符串，将会原样输出
// var x = 1;
// var y = 1;
// var html = `${x} + ${y} = ${x + y}`;
// document.body.innerHTML = html;
// 模板字符串中还能调用函数
// function fn() {
//   return 'hhhh';
// }
// document.body.innerHTML = `foo ${fn()} bar`;

// 如果大括号中的值不是字符串，将按照一般的规则转为字符串。
// 如果模板字符串中的变量没有声明，将报错。
// var msg = `hhh ${aaa}`;
// document.body.innerHTML = msg;

// 嵌套的模板字符串
const data = [
  { first: '<Jane>', last: 'Bond' },
  { first: 'Lars', last: '<Croft>' }
];
// const tmpl = (addrs) => `
//   <table>
//   ${addrs
//     .map(
//       (addr) => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `
//     )
//     .join('')}
//   </table>
// `;
// document.body.innerHTML = tmpl(data);

// 当需要引用模板字符串本身，在需要时执行，有两种写法：
// 1、
// let str = 'return' + '`aaa ${name}`';
// let func = new Function('name', str);
// console.log(func('jack'));
// 2、
// eval():可计算某个字符串，并执行其中的js代码
// let str = '(name) => `bbb ${name}`';
// let func = eval.call(null, str);
// console.log(func('jack'));

// 实例
// <%...%>:放置js代码
// <%= ... %>:输出js代码
var template = `
<ul>
  <% for (var i = 0; i < data.supplies.length; i++) {
  %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
// echo('<ul>');
// for (var i = 0; i < data.supplies.length; i++) {
//   echo('<li>');
//   echo(data.supplies[i]);
//   echo('</li>');
// }
// echo('</ul>');
function compile(template) {
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  var script = `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${template}

    return output;
  })`;

  return script;
}
var parse = eval(compile(template));
// document.body.innerHTML = parse({ supplies: ['broom', 'mop', 'cleaner'] });

// 标签模板：其实不是模板，而是函数调用的一种特殊形式。标签指的是函数，紧跟在后面的模板字符串就是它的参数。
var a = 5,
  b = 10;
function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return 'OK';
}
// tag`hello ${a + b} world ${a * 5}`;

// String.raw():还原原生String对象
console.log(String.raw`Hi\n${2 + 3}`);

// 总结：
// 1、加强了对Unicode的支持；codePointAt()、String.fromCodePoint()
// 2、字符串遍历：for of
// 3、at():返回字符串给定位置的字符，需使用垫片库
// 4、normalize():将字符不同表示方法统一为同样的形式
// 5、包含关系：includes()、startsWidth()、endsWidth()
// 6、repeat(n):重复n次字符串
// 7、补全功能：padStart(),padEnd()
// 8、模板字符串：``
// 9、标签模板
// 10、String.raw():还原原生String对象
