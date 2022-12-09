class NodeT{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class treeB{
    constructor(){
        this.root = null;
        this.code = null;
        this.nodes = null;
        this.connect = null;
    }

    appendRecursive(data, data1,root){
        if(root == null){
            var temp = new NodeT(data1);
            return temp;
        }else{
            if(data < root.data.dpi){
                root.left = this.appendRecursive(data,data1, root.left);
            }else{
                root.right = this.appendRecursive(data, data1, root.right);
            }
            return root;
        }
        
    }

    append(data, dataNode){
        this.root = this.appendRecursive(data,dataNode, this.root);        
    }

    preOrderRecursive(root){
        if(root){
            console.log(root.data.nameW);
            this.preOrderRecursive(root.left);
            this.preOrderRecursive(root.right);
        }
    }

    preOrder(){
        this.preOrderRecursive(this.root);
    }

    inOrderRecursive(root){
        if(root){
            this.inOrderRecursive(root.left);
            console.log(root.data.nameW);
            this.inOrderRecursive(root.right);
        }
    }

    inOrder(){
        this.inOrderRecursive(this.root);
    }

    postOrderRecursive(root){
        if(root){
            this.postOrderRecursive(root.left);
            this.postOrderRecursive(root.right);
            console.log(root.data.nameW);
        }
    }

    postOrder(){
        this.postOrderRecursive(this.root);
    }

    graph1(head){
        if(head != null){
            this.nodes += head.data.dpi+"[label=\""+head.data.nameW+"\"];\n";
            if(head.left != null){
                this.connect += head.data.dpi + "->" + head.left.data.dpi + ";\n";
            }
            if(head.right != null){
                this.connect += head.data.dpi + " -> " + head.right.data.dpi + ";\n";
            }
            this.graph1(head.left);
            this.graph1(head.right);

        }
    }

    graph(){
        this.code = "";
        this.nodes = "";
        this.connect = "";
        this.code += "digraph G{\nlabel= \"TreeB\"\nedge[dir=none] \n node [shape=oval];\n";
        this.graph1(this.root);
        this.code += this.nodes;

        this.code += this.connect;
        this.code += "\n}";
        
        console.log(this.code);
        d3.select("#arbolAutores").graphviz()
            .width(2350)
            .height(200)
            .renderDot(this.code)
    }
}