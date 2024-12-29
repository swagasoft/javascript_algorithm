

class CustomNode {
    key: number;
    val: any;
    next: CustomNode | null;
    prev: CustomNode | null;
    constructor(key: number, val: any) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
        
        
    }
}


export default class LRUCache {
    capacity: number;
    count: number;
    head : CustomNode | null;
    tail : CustomNode | null;
    cache = new Map <number, any>();

    constructor(){
        this.capacity = 0;
        this.count = 0;
        this.head = null;
        this.tail = null;
    }


    private remove(removedNode: CustomNode): void{
     let  prev = removedNode.prev;
     let next = removedNode.next;
     prev?.next , next?.prev == next, prev;
     this.count--;

    }


    private insert(key: number, tempNode: CustomNode ): void {

      this.cache.set(key, tempNode);

      if(!this.head){
        this.head = tempNode;
        this.tail = tempNode;
      }else{
        this.head.prev = tempNode;
        tempNode.next = this.head;
        this.head = tempNode;
      }
    }



 

//  Return the value of a given key
    public get(key: number, value: any): CustomNode | null {
        if(this.cache.has(key)){
            let tempNode = this.cache.get(key);
            this.remove(tempNode);
            this.insert(key, tempNode);
            return tempNode;
        }else{
            return null;
        }
    }

    put(key:number, value: any): boolean {
        let newNode = new CustomNode(key, value);
        if(this.cache.get(key)){
            this.insert(key, newNode);
            return true;
        }
            //  check if space is available
       if(this.count < this.capacity){
        this.cache.set(key, newNode);
        this.count++;
        return true;

       }else{
        return false;
       }
   
    }

    public displayList():  any{
        let current = this.head;
        let listData = <CustomNode[]> [] ;
        while(current){
            listData.push(current);
            current.next;
        }
        return listData;
    }
}

let cc = new LRUCache();
cc.put(1,'simon');
cc.put(2,'james');
cc.put(3,'blessing');
cc.put(4,'shawn');
console.log('result ', cc.displayList());

