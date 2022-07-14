class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        
        
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
            this.length = 0
        
    }


    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length  += 1;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let removeableNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removeableNode.prev;
            this.tail.next = null;
            removeableNode.prev = null;
        }

        this.length -= 1;
        return removeableNode;
    }


    shift(){
        if(this.length === 0) return undefined;
            let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -=1;
        return oldHead;
    }

    unShift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length)return null;
        let current, count;
        if(index <= this.length/2){
         count = 0;
        current =  this.head;
            console.log('START FROM HEAD')

        while( count != index){
            current =  current.next;
            count++;
        }
        return current;
        }else{
            //  start from the tails
            console.log('START FROM END')
             count =  this.length - 1;
            current = this.tail;
            while(count != index){
                 current = this.tail.prev;
                count--;
            }
            return current;
        }
    
    }


    set(index, val){
        var  foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val){
        if(index < 0  || index > this.length) return false;
        if(index === 0) return !!this.unShift(val)
        if(index === this.length) return !!this.push(val);

        let newNode =  new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode =  beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;

        afterNode.prev = newNode, newNode.next = afterNode;
        this.length += 1;
        return true;
    }

    remove(index){
        if(index < 0  || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if (index ===  this.length - 1) return this.pop();
        var removedNode = this.get(index);
        // let beforeNode = removedNode.prev;
        // let afterNode = removedNode.next;
        // afterNode.prev = beforeNode;
        // beforeNode.next = afterNode;

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length --;
        return removedNode;
        
    }
}


let list = new DoubleLinkedList();
list.push(1)
list.push(2)
list.push(3)