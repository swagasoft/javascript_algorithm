


class CustomNode {
    val: any;
    next: CustomNode | null;
    prev: CustomNode | null;
    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;
        
        
    }
}

export default class DoubleLinkedList {
    val: any;
    head: CustomNode | null;
    tail: CustomNode | null;
    capacity: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.capacity = 0;

    }

   public push(val: any): void{
        let newNode = new CustomNode(val);
        if(this.capacity ===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail!.next = newNode ;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.capacity += 1;
    }


   public pop(): CustomNode | undefined{
        if (!this.head){
            return undefined;
        }
        let removableNode = this.tail;
        if(this.capacity === 1){
            this.head = null;
            this.tail =  null;
            
        }else{
            this.tail = removableNode!.prev;
            this.tail!.next = null;
            removableNode!.prev = null
        }
        this.capacity -= 1;
        return removableNode || undefined;
    }

    //  remove from head
  public  shift(): CustomNode | undefined{
        if(this.capacity === 0) return undefined;
        let removeAbleHead =  this.head;
        if(this.capacity === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removeAbleHead!.prev;
            this.head!.prev = null;
            removeAbleHead!.next = null;
            removeAbleHead!.prev = null;
        }
        this.capacity -= 1;
        return removeAbleHead || undefined;
    }

    // Add to the front
   public unshift(val: any): any {
        let newNode = new CustomNode(val);
        if(this.capacity === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head!.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.capacity ++;
        return this;
    }

   public get(index: number): CustomNode | null {
        if(index < 0 || index > this.capacity){
            return null;
        }

        if(index < this.capacity/2){
            //  start from head
            let current = this.head;
            let counter = 0;
            
            while(counter !== index){
                current = current!.next;
                counter++;
            }
            return current;

        }else{
            //  start from end
            let counter = this.capacity - 1;
            let current = this.tail;

            while(counter !== index){
                current = current!.prev;
                counter -= 1;
            }
            return current;
        }
    }

   public insert(index: number, value: any): boolean {
        if(index < 0 || index > this.capacity) {
            return false;
        }

        let newNode =  new CustomNode(value) ;
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode!.next;
        beforeNode!.next = newNode, newNode.prev = beforeNode;
        afterNode!.prev = newNode, newNode.next = afterNode;
        this.capacity += 1;
        return true;
    }
    
}


