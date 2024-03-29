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

    
    //parametro(name, data)
    append(data, dataNode){
        this.root = this.appendRecursive(data,dataNode, this.root);        
    }
    
    appendRecursive(data, data1, root){
            if(root == null){
                var temp = new NodeT(data1);
                return temp;
            }else{
                if(data > root.data.name){
                    root.right = this.appendRecursive(data,data1, root.right);
                    console.log('derecha');
                }else{
                    root.left = this.appendRecursive(data, data1, root.left);
                    console.log('izquierda');
                }
                
            }
            return root;
        }
        
    preOrderRecursive(root){
        if(root){
            console.log(root.data.name);
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
            console.log(root.data.name);
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
            console.log(root.data.name);
        }
    }

    postOrder(){
        this.postOrderRecursive(this.root);
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
        d3.select("#mostrarGP").graphviz()
            .width(950)
            .height(900)
            .renderDot(this.code)
    }
   
    graph1(head){
            if(head != null){
                this.nodes += head.data.name+"[label=\""+head.data.name+"\"];\n";
                if(head.left != null){
                    this.connect += head.data.name + "->" + head.left.data.name + ";\n";
                }
                if(head.right != null){
                    this.connect += head.data.name + "->" + head.right.data.name + ";\n";
                }
                this.graph1(head.left);
                this.graph1(head.right);
                
            }
        }
}