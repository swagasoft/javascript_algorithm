
function Node(data, left, right){
    this.data = data;
    this.right = right;
    this.left = left;
    this.show = show;
}


function show(){
    return this.data;
}


function bst(){
    this.root = null;
    this.inOrder = this.inOrder;
    this.insert = this.insert;
}


function inser(data){
    var n =  new Node(data, null, null);
    if (this.root === null){
        this.root = n;
    }else{
        let currNode = this.root;
        let parentNode;
        while(true){
            parentNode = currNode;
            if(data < currNode.data){
                currNode = currNode.left;
                if(currNode == null){
                    parentNode.left = n;
                    break;
                }
            }else{
                currNode = currNode.right;
                if(currNode == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}