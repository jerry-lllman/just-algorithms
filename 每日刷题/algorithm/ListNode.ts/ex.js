"use strict";
exports.__esModule = true;
var _1 = require(".");
var node = new _1.ListNode(1, new _1.ListNode(3, new _1.ListNode(5, new _1.ListNode(6, new _1.ListNode(8)))));
// 1 -> 3 -> 5 -> 6 -> 8
//  1
//  1 -> 3 -> 5 -> 6 -> 8 -> ?
var node1 = new _1.ListNode(10);
function add() {
    if (!node) {
        node = node1;
    }
    var temp = node;
    while (temp === null || temp === void 0 ? void 0 : temp.next) {
        temp = temp.next;
    }
    temp.next = node1;
    return node;
}
console.log(JSON.stringify(add(), null, 2));
