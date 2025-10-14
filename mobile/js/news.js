window.onload = function () {
  //获取.card下面的全部div元素
  var titles = document.querySelector(".new-daohang").getElementsByTagName("li");
  console.log(titles);
  //获取.content下面的全部div元素
  var divs = document.querySelector(".list-con").getElementsByTagName("div");
  console.log(divs);
  //遍历所有div标签，给每个div加上id和值，并且绑定事件
  for (var i = 0; i < titles.length; i++) {
    //给每个div加上id和值
    titles[i].id = i;
    //给每个div绑定事件
    titles[i].onclick = function () {
      //悬浮后首先应该初始化每个div上的类和display
      for (var j = 0; j < titles.length; j++) {
        divs[j].style.display = "none";
        titles[j].classList.remove("red");
      }
      divs[this.id].style.display = "block";
      titles[this.id].classList.add("red");
    };
  }
};
