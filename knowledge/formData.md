<!--
 * @Descripttion: formData代替form表单上传
 * @Date: 2020-12-07 10:32:32
 * @LastEditTime: 2020-12-08 14:37:30
-->

## formData 用途：

1、将 form 表单元素的 name 与 value 进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
2、异步上传文件

### formData 对象操作流程

```
var formData = new FormData();

<!-- 可以通过append（）方法来追加数据 -->
formData.append('name','cc');

<!-- 通过get方法对值进行读取 -->
<!-- 获取的key为name的第一个值 -->
formData.get('name');
<!-- 获取的key为name的所有值，返回值为数组类型 -->
formData.getAll('name');

<!-- 通过set方法对值进行设置 -->
formData.set('name','cc');

<!-- 通过has(key)来判断是否存在对应的key值 -->
formData.has('name');

<!-- 通过delete(key)可以删除数据 -->
formData.delete('name');

<!-- 返回一个包含所有键值对的Iterator对象 -->
formData.entries();

<!-- 返回一个包含所有键的Iterator对象 -->
formData.keys();

<!-- 返回一个包含所有值的Iterator对象 -->
formData.values();
```

### 通过 XMLHTTPRequest 发送数据

```
var xhr = new XMLHttpRequest();
xhr.open('post','http://127.0.0.1/adv');
xhr.send(formData);
xhr.onload = function () {
  if (xhr.status == 200) {
    // ...
  }
}
```
