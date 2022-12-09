class NodeQ{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class Queue{
    constructor(){
        this.head = null;
        this.last = null;
    }

    enqueue(data){
        var temp = new NodeQ(data);
        if(this.head == null){
            this.head = temp;
            this.last = temp;
        }else{
            this.last.next = temp;
            this.last = temp;
        }
    }

    dequeue(){
        if(this.head == null){
            console.log('No hay elementos en la cola');
        }else{
            var temp = this.head;
            if(this.head == this.last){
                this.head = null;
                this.last = null;
            }else{
                this.head = this.head.next;
            }
            return temp;
        }
    }

    display(){
        var temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    graph(){
        var code = ""
        code += "digraph G{\nlabel= \"Queue\" \n node [shape=box];\n";
        var temp = this.head;
        var connect = "";
        var nodes = "";
        var contNodes = 0;
        while(temp != null ){
            nodes+= "N" + contNodes + "[label=\" Usuario:" +temp.data.nameU+"\nLibro:"+temp.data.book+"\nCantidad:"+temp.data.cantidad+"\" ];\n";
            if(temp.next != this.head){
                var aux = contNodes+1;
                if(temp != this.last){
                    connect+= "N" + contNodes + " -> N" + aux + " ;\n";
                }
                
            }
            temp = temp.next;
            contNodes++;
        }
        
        code += "//agregando nodos\n";
        code += nodes+"\n";
        code += "//agregando conexiones o flechas\n";
        code += "\n"+connect+"\n}";
        console.log(code);
        d3.select("#ColaEspera").graphviz()
            .width(2350)
            .height(200)
            .renderDot(code)
    }
}