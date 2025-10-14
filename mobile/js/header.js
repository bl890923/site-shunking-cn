document.getElementsByClassName("x-menu")[0].onclick = function () {//查找元素并绑定单击事件
  var list = document.getElementsByClassName("menu")[0]; //获取需要影响的元素
  if (list.classList.contains("hide")) {//判断是否显示
    list.classList.remove("hide"); //未显示就移出hide类名  使其显示
  } else {
    list.classList.add("hide"); //显示就添加hide类名  使其隐藏
  }
};
