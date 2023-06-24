/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2022-12-20 14:13:45
 * @LastEditTime: 2022-12-20 14:13:49
 * @FilePath: \blog\source\assert\js\baimofunction.js
 */
// 音乐绑定事件
function musicBindEvent() {
  document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
    baimo.musicTelescopic();
  });
  document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
    baimo.musicToggle(false);
  });
}