"use strict";
exports.__esModule = true;
var CustomNode = /** @class */ (function () {
    function CustomNode(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return CustomNode;
}());
var LRUCache = /** @class */ (function () {
    function LRUCache() {
        this.cache = new Map();
        this.capacity = 0;
        this.count = 0;
        this.head = null;
        this.tail = null;
    }
    LRUCache.prototype.remove = function (removedNode) {
        var prev = removedNode.prev;
        var next = removedNode.next;
        prev === null || prev === void 0 ? void 0 : prev.next, (next === null || next === void 0 ? void 0 : next.prev) == next, prev;
        this.count--;
    };
    LRUCache.prototype.insert = function (key, tempNode) {
        this.cache.set(key, tempNode);
        if (!this.head) {
            this.head = tempNode;
            this.tail = tempNode;
        }
        else {
            this.head.prev = tempNode;
            tempNode.next = this.head;
            this.head = tempNode;
        }
    };
    //  Return the value of a given key
    LRUCache.prototype.get = function (key, value) {
        if (this.cache.has(key)) {
            var tempNode = this.cache.get(key);
            this.remove(tempNode);
            this.insert(key, tempNode);
            return tempNode;
        }
        else {
            return null;
        }
    };
    LRUCache.prototype.put = function (key, value) {
        var newNode = new CustomNode(key, value);
        if (this.cache.get(key)) {
            this.insert(key, newNode);
            return true;
        }
        //  check if space is available
        if (this.count < this.capacity) {
            this.cache.set(key, newNode);
            this.count++;
            return true;
        }
        else {
            return false;
        }
    };
    LRUCache.prototype.displayList = function () {
        var current = this.head;
        var listData = [];
        while (current) {
            listData.push(current);
            current.next;
        }
        return listData;
    };
    return LRUCache;
}());
exports["default"] = LRUCache;
var cc = new LRUCache();
cc.put(1, 'simon');
cc.put(2, 'james');
cc.put(3, 'blessing');
cc.put(4, 'shawn');
console.log('result ', cc.displayList());
