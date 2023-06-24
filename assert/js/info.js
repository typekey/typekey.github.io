/*
 * @Author: Zheng Lei
 * @Email: baimoc@163.com
 * @Date: 2022-12-22 21:27:09
 * @LastEditTime: 2022-12-22 22:54:15
 * @FilePath: \blog\public\assert\js\info.js
 */

setTimeout (console.clear.bind (console, ""));
let year = new Date().getFullYear();
let copyright = `©${year} By Zhenglei`
let email = "✉️ baimoc@163.com"
let website = "🏠 https://www.ziptop.top"
let license = `${copyright} | Please comply with the GPL License.`
let photo = "%cDeveloper mode is open...\nCall the front camera...\nAI analysis...\nCaptured your photo:\n\n%c🤔\n\n%cHello, friend, welcome to my site.\n"
let contact = `Contact ${email}  ${website}`
setTimeout (console.log.bind (console, `${photo}\n${contact}\n\n${license}`,"font-size:14px","font-size:50px","font-size:14px"));
