"use strict";
exports.__esModule = true;
var CustomNode = /** @class */ (function () {
    function CustomNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return CustomNode;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.head = null;
        this.tail = null;
        this.capacity = 0;
    }
    DoubleLinkedList.prototype.push = function (val) {
        var newNode = new CustomNode(val);
        if (this.capacity === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.capacity += 1;
    };
    DoubleLinkedList.prototype.pop = function () {
        if (!this.head) {
            return undefined;
        }
        var removableNode = this.tail;
        if (this.capacity === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = removableNode.prev;
            this.tail.next = null;
            removableNode.prev = null;
        }
        this.capacity -= 1;
        return removableNode || undefined;
    };
    //  remove from head
    DoubleLinkedList.prototype.shift = function () {
        if (this.capacity === 0)
            return undefined;
        var removeAbleHead = this.head;
        if (this.capacity === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = removeAbleHead.prev;
            this.head.prev = null;
            removeAbleHead.next = null;
            removeAbleHead.prev = null;
        }
        this.capacity -= 1;
        return removeAbleHead || undefined;
    };
    // Add to the front
    DoubleLinkedList.prototype.unshift = function (val) {
        var newNode = new CustomNode(val);
        if (this.capacity === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.capacity++;
        return this;
    };
    DoubleLinkedList.prototype.get = function (index) {
        if (index < 0 || index > this.capacity) {
            return null;
        }
        if (index < this.capacity / 2) {
            //  start from head
            var current = this.head;
            var counter = 0;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
        else {
            //  start from end
            var counter = this.capacity - 1;
            var current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter -= 1;
            }
            return current;
        }
    };
    DoubleLinkedList.prototype.insert = function (index, value) {
        if (index < 0 || index > this.capacity) {
            return false;
        }
        var newNode = new CustomNode(value);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;
        this.capacity += 1;
        return true;
    };
    return DoubleLinkedList;
}());
exports["default"] = DoubleLinkedList;
