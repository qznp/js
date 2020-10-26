$.extend({
  NBlog: function (data) {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth(),
      d = date.getDate(),
      h = date.getHours(),
      min = date.getMinutes(),
      s = date.getSeconds(),
      time = y + '年' + m + '月' + d + '日' + h + '时' + min + '分' + s + '秒';
    console.log(time);
  }
});
