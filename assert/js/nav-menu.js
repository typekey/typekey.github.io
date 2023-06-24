/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2022-12-20 00:38:26
 * @LastEditTime: 2022-12-20 01:11:39
 * @FilePath: \blog\source\assert\js\nav-menu.js
 */
// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | 安知鱼")[0];

function scrollIntoView(traget) {
  const tragetElem = document.querySelector(traget);
  const tragetElemPostition = tragetElem.offsetTop;

  // 判断是否支持新特性
  if (
    typeof window.getComputedStyle(document.body).scrollBehavior ==
    "undefined"
  ) {
    // 当前滚动高度
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    // 滚动step方法
    const step = function() {
      // 距离目标滚动距离
      let distance = tragetElemPostition - scrollTop;
      
      // 目标需要滚动的距离，也就是只走全部距离的五分之一
      scrollTop = scrollTop + distance / 5;
      if (Math.abs(distance) < 1) {
        window.scrollTo(0, tragetElemPostition);
      } else {
        window.scrollTo(0, scrollTop);
        setTimeout(step, 20);
      }
    };
    step();
  } else {
    tragetElem.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
}
